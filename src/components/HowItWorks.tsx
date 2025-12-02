import React from 'react';
import { Search, Settings, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Descubrir",
      description: "Analizamos tu negocio y identificamos oportunidades de automatización"
    },
    {
      number: "02", 
      icon: Settings,
      title: "Implementar",
      description: "Desarrollamos e integramos soluciones de IA personalizadas para tu empresa"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Escalar",
      description: "Optimizamos y expandimos tus sistemas para maximizar el crecimiento"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">
            Cómo Funciona
          </h2>
          <p className="text-2xl text-gray-300 font-normal max-w-3xl mx-auto">
            Un proceso simple y probado para transformar tu negocio con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-[#61CBB3] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#1D1D1F] text-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent transform translate-x-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;