import { supabase, type LeadConsultation } from '../lib/supabase';

// Función simplificada y robusta para envío de formularios
export const submitLeadForm = async (formData: {
  name: string;
  email: string;
  service: string;
  company: string;
  problems: string;
  additionalInfo?: string;
}) => {
  console.log('📝 Iniciando envío de formulario...');
  
  try {
    // 1. Validar datos requeridos
    const requiredFields = ['name', 'email', 'service', 'company', 'problems'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      throw new Error(`Campos requeridos faltantes: ${missingFields.join(', ')}`);
    }

    // 2. Limpiar y preparar datos
    const cleanData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      service: formData.service,
      company: formData.company.trim(),
      problems: formData.problems.trim(),
      additional_info: formData.additionalInfo?.trim() || ''
    };

    console.log('🧹 Datos preparados:', cleanData);

    // 3. Enviar a Supabase
    const { data, error } = await supabase
      .from('lead_consultations')
      .insert([cleanData])
      .select();

    if (error) {
      console.error('❌ Error de Supabase:', error);

      // Manejo específico de errores comunes
      if (error.code === '42501') {
        throw new Error('Error de configuración de base de datos. Por favor contacta al administrador.');
      } else if (error.code === 'PGRST116') {
        throw new Error('La tabla no existe. Por favor contacta al administrador.');
      } else {
        throw new Error(`Error de base de datos: ${error.message}`);
      }
    }

    console.log('✅ Datos enviados a Supabase exitosamente:', data);

    // 4. Enviar al webhook de n8n
    try {
      console.log('📡 Enviando datos al webhook de n8n...');
      console.log('📦 Payload:', JSON.stringify(cleanData, null, 2));

      const webhookResponse = await fetch('https://n8n-nwyt.onrender.com/webhook-test/Forum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(cleanData)
      });

      console.log('📊 Webhook status:', webhookResponse.status);

      const responseText = await webhookResponse.text();
      console.log('📄 Webhook response:', responseText);

      if (!webhookResponse.ok) {
        console.error('⚠️ Error al enviar al webhook:', {
          status: webhookResponse.status,
          statusText: webhookResponse.statusText,
          response: responseText
        });
      } else {
        console.log('✅ Datos enviados al webhook exitosamente');
      }
    } catch (webhookError) {
      // No lanzamos error aquí para no afectar la experiencia del usuario
      // ya que los datos se guardaron correctamente en Supabase
      console.error('❌ Error al conectar con el webhook:', webhookError);
    }

    return { success: true, data };

  } catch (error) {
    console.error('❌ Error en envío de formulario:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }
};

// Función para validar email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar formulario completo
export const validateFormData = (formData: {
  name: string;
  email: string;
  service: string;
  company: string;
  problems: string;
}) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'El nombre es requerido';
  }

  if (!formData.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Por favor ingresa un email válido';
  }

  if (!formData.service) {
    errors.service = 'Por favor selecciona un servicio';
  }

  if (!formData.company.trim()) {
    errors.company = 'El nombre de la empresa es requerido';
  }

  if (!formData.problems.trim()) {
    errors.problems = 'Por favor describe los problemas que buscas resolver';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};