import React from 'react';
import { Brain, MessageSquare, Calendar, Users } from 'lucide-react';

const ServicesGrid = () => {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-600 mb-4 sm:mb-6">
            Servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Servicio 1: Automatización de Procesos */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 min-h-[400px] sm:min-h-[500px] shadow-lg hover:shadow-xl" style={{backgroundColor: '#29565B'}}>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 sm:mb-8">
                <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 sm:mb-6 drop-shadow-sm" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-sm">
                Automatización de Procesos
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal mb-8 sm:mb-12 leading-relaxed">
                Reduci el tiempo de ejecución de tareas con tan solo un click
              </p>

              <div className="mt-auto mb-6 sm:mb-8">
                <a href="/demo?service=Automatización de procesos" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base lg:text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl text-center border border-emerald-700 hover:border-emerald-800 block">
                  Contratar Servicio
                </a>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-white/80 font-medium relative z-10">
              Evitamos errores humanos
            </div>

            {/* Abstract 3D Visual */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-tr from-white/10 to-white/20 rounded-2xl rotate-12 shadow-2xl"></div>
              </div>
            </div>
          </div>

          {/* Servicio 2: Soporte al Cliente */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 min-h-[400px] sm:min-h-[500px] shadow-lg hover:shadow-xl" style={{backgroundColor: '#47958A'}}>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 sm:mb-8">
                <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 sm:mb-6 drop-shadow-sm" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-sm">
                Soporte al Cliente
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal mb-8 sm:mb-12 leading-relaxed">
                Brinda atención a tus usuarios 24/7 con nuestro asistente virtual
              </p>

              <div className="mt-auto mb-6 sm:mb-8">
                <a href="/demo?service=Soporte al cliente" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base lg:text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl text-center border border-emerald-700 hover:border-emerald-800 block">
                  Contratar Servicio
                </a>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-white/80 font-medium relative z-10">
              Soporte continuo y efectivo
            </div>

            {/* Abstract 3D Visual */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-8 left-8 w-48 h-48 border-2 border-white/30 rounded-2xl rotate-12 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-4 border border-white/20 rounded-xl opacity-60"></div>
                  <div className="absolute inset-8 border border-white/10 rounded-lg opacity-40"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 3: Planificador de Llamadas */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 min-h-[400px] sm:min-h-[500px] shadow-lg hover:shadow-xl" style={{backgroundColor: '#6EE7C6'}}>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 sm:mb-8">
                <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-900 mb-4 sm:mb-6 drop-shadow-sm" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
                Planificador de Llamadas
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-emerald-800 font-normal mb-8 sm:mb-12 leading-relaxed">
                Convierte leads en reuniones automáticamente
              </p>

              <div className="mt-auto mb-6 sm:mb-8">
                <a href="/demo?service=Planificador de llamadas" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base lg:text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl text-center border border-emerald-700 hover:border-emerald-800 block">
                  Contratar Servicio
                </a>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-emerald-800 font-medium relative z-10">
              Agenda automática y confiable
            </div>

            {/* Abstract 3D Visual */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-emerald-500/10 rounded-2xl rotate-12 shadow-2xl backdrop-blur-sm border border-emerald-600/20">
                  <div className="absolute inset-4 border border-emerald-500/15 rounded-xl"></div>
                  <div className="absolute inset-8 bg-emerald-400/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 4: Integración de Clientes */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 min-h-[400px] sm:min-h-[500px] shadow-lg hover:shadow-xl" style={{backgroundColor: '#E8F5E9'}}>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 sm:mb-8">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-700 mb-4 sm:mb-6 drop-shadow-sm" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
                Integración de Clientes
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-emerald-800 font-normal mb-8 sm:mb-12 leading-relaxed">
                Integra y gestiona clientes sin complicaciones
              </p>

              <div className="mt-auto mb-6 sm:mb-8">
                <a href="/demo?service=Integración de clientes" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base lg:text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl text-center border border-emerald-700 hover:border-emerald-800 block">
                  Contratar Servicio
                </a>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-emerald-700 font-medium relative z-10">
              Implementación ágil y segura
            </div>

            {/* Abstract 3D Visual */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-emerald-500/10 rounded-2xl rotate-12 shadow-2xl backdrop-blur-sm border border-emerald-600/20">
                  <div className="absolute inset-4 border border-emerald-500/15 rounded-xl"></div>
                  <div className="absolute inset-8 bg-emerald-400/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;