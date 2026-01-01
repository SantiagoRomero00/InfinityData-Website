import React from 'react';
import { Search, Settings, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: Search,
      title: t('howItWorks.steps.discover.title'),
      description: t('howItWorks.steps.discover.description')
    },
    {
      number: "02",
      icon: Settings,
      title: t('howItWorks.steps.implement.title'),
      description: t('howItWorks.steps.implement.description')
    },
    {
      number: "03",
      icon: TrendingUp,
      title: t('howItWorks.steps.scale.title'),
      description: t('howItWorks.steps.scale.description')
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-normal max-w-3xl mx-auto px-4">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 sm:mb-8 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400 to-[#61CBB3] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="absolute -top-2 sm:-top-4 right-1/4 sm:right-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#1D1D1F] text-sm sm:text-lg">
                  {step.number}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {step.title}
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
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