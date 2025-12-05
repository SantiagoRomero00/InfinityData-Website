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

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 mb-12 shadow-inner">
              <div className="bg-white rounded-xl shadow-lg p-12 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Entrada</h4>
                    <p className="text-sm text-center text-white/90">Datos del cliente</p>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Procesamiento IA</h4>
                    <p className="text-sm text-center text-white/90">Análisis automatizado</p>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-xl text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Resultado</h4>
                    <p className="text-sm text-center text-white/90">Acción completada</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">Reducción 80% de tiempo</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">99.9% de precisión</span>
                  </div>
                </div>
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
