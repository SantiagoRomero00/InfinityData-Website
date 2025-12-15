import React from 'react';
import { Infinity, ArrowLeft, GraduationCap, Award, Zap, Search, Settings, TrendingUp } from 'lucide-react';
import Footer from './Footer';
import profileImage from '../../Assets/cropped_pp.jpeg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Infinity className="w-8 h-8 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Infinity Data</span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <img
                  src={profileImage}
                  alt="Santiago - Fundador de Infinity Data"
                  className="w-full h-auto rounded-3xl shadow-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nosotros
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Soy Santiago, ingeniero industrial y fundador de Infinity Data. Mi misión es transformar empresas mediante automatización inteligente y soluciones de IA que generan resultados medibles.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Con formación en ingeniería y experiencia práctica en implementación de sistemas, ayudo a empresas a optimizar procesos, captar leads de forma escalable y construir infraestructuras tecnológicas robustas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ingeniero Industrial</h3>
                    <p className="text-gray-600 text-sm">Especializado en optimización de procesos y sistemas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Experto en Automatización</h3>
                    <p className="text-gray-600 text-sm">N8n, Make, Python y soluciones de IA avanzada</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resultados Comprobados</h3>
                    <p className="text-gray-600 text-sm">Proyectos exitosos en múltiples industrias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Dominamos la tecnología líder del mercado
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-4xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">n8n</div>
                <p className="text-sm text-gray-600 text-center">Automatización</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-4xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Make</div>
                <p className="text-sm text-gray-600 text-center">Integración</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-4xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">AI</div>
                <p className="text-sm text-gray-600 text-center">OpenAI</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-4xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Py</div>
                <p className="text-sm text-gray-600 text-center">Python</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-4xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">SQL</div>
                <p className="text-sm text-gray-600 text-center">Bases de Datos</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-3xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">PB</div>
                <p className="text-sm text-gray-600 text-center">PhantomBuster</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-3xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Inst</div>
                <p className="text-sm text-gray-600 text-center">Instantly.ai</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
                <div className="text-3xl font-bold text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 mb-2">API</div>
                <p className="text-sm text-gray-600 text-center">Integraciones</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Cómo Trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Auditoría</h3>
              <p className="text-gray-600 leading-relaxed">
                Analizamos a fondo tus procesos actuales, identificamos cuellos de botella y oportunidades de automatización que generen el mayor impacto.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Diseño e Implementación</h3>
              <p className="text-gray-600 leading-relaxed">
                Construimos soluciones personalizadas usando las mejores herramientas del mercado, integrando sistemas y creando flujos robustos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Optimización Continua</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitoreamos el rendimiento, ajustamos estrategias y escalamos las soluciones conforme crece tu negocio.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
