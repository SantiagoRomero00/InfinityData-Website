import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServiceInfo {
  title: string;
  description: string;
  videoPlaceholder: string;
  buttonText: string;
}

const serviceData: Record<string, ServiceInfo> = {
  'automatizacion-procesos': {
    title: 'Automatización de Procesos',
    description: 'Optimiza tus operaciones eliminando tareas repetitivas y reduciendo errores humanos. Nuestra solución de automatización te permite ejecutar procesos complejos con un solo clic, ahorrando tiempo valioso y aumentando la eficiencia de tu equipo. Desde la gestión de documentos hasta flujos de trabajo personalizados, transformamos la manera en que trabajas.',
    videoPlaceholder: 'Video demostrativo de Automatización de Procesos',
    buttonText: 'Quiero contratar Automatización de Procesos'
  },
  'soporte-cliente': {
    title: 'Soporte al Cliente',
    description: 'Brinda atención excepcional a tus clientes las 24 horas del día, los 7 días de la semana. Nuestro asistente virtual inteligente responde consultas, resuelve problemas y guía a tus usuarios de manera natural y eficiente. Mejora la satisfacción del cliente mientras reduces la carga de trabajo de tu equipo de soporte.',
    videoPlaceholder: 'Video demostrativo de Soporte al Cliente',
    buttonText: 'Quiero contratar Soporte al Cliente'
  },
  'planificador-llamadas': {
    title: 'Planificador de Llamadas',
    description: 'Transforma tus leads en reuniones programadas de forma automática. Nuestro sistema inteligente coordina horarios, envía recordatorios y gestiona tu agenda sin intervención manual. Elimina el intercambio de emails y maximiza tu tasa de conversión con un proceso de agendamiento fluido y profesional.',
    videoPlaceholder: 'Video demostrativo de Planificador de Llamadas',
    buttonText: 'Quiero contratar Planificador de Llamadas'
  },
  'integracion-clientes': {
    title: 'Integración de Clientes',
    description: 'Simplifica la incorporación y gestión de nuevos clientes con un proceso automatizado y sin fricciones. Desde la recopilación de datos hasta la configuración de cuentas, nuestra solución asegura una experiencia impecable para tus clientes mientras mantiene toda la información organizada y segura en tus sistemas.',
    videoPlaceholder: 'Video demostrativo de Integración de Clientes',
    buttonText: 'Quiero contratar Integración de Clientes'
  }
};

const ServiceDemo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceKey = searchParams.get('service') || '';

  const service = serviceData[serviceKey];

  if (!service) {
    navigate('/');
    return null;
  }

  const handleContractService = () => {
    navigate(`/demo?service=${service.title}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 lg:p-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12 shadow-inner">
              <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
                <img
                  src="/Assets/image.png"
                  alt="Diagrama de flujo de automatización"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-6 font-medium">
                Flujo de automatización inteligente
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleContractService}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDemo;
