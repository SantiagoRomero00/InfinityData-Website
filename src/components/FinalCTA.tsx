import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const benefits = [
    "Consulta gratuita de 30 minutos",
    "Análisis personalizado de tu negocio", 
    "Propuesta de automatización sin compromiso",
    "ROI estimado en 48 horas"
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          ¿Listo para
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-[#61CBB3] bg-clip-text text-transparent">
            Automatizar?
          </span>
        </h2>
        
        <p className="text-2xl text-gray-300 font-normal mb-12 leading-relaxed max-w-2xl mx-auto">
          Únete a cientos de empresas que ya están transformando sus procesos con IA
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 text-left">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-lg text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/demo" className="group bg-gradient-to-r from-emerald-500 to-[#61CBB3] hover:from-emerald-600 hover:to-[#4fb3a0] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-3">
            <span>Reservar Consulta Gratuita</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Resultados garantizados • Soporte 24/7
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#61CBB3]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FinalCTA;