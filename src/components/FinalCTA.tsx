import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const FinalCTA = () => {
  const { t } = useTranslation();

  const benefits = [
    t('finalCTA.benefits.0'),
    t('finalCTA.benefits.1'),
    t('finalCTA.benefits.2'),
    t('finalCTA.benefits.3')
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          {t('finalCTA.title.line1')}
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-[#61CBB3] bg-clip-text text-transparent">
            {t('finalCTA.title.line2')}
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-normal mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
          {t('finalCTA.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 text-left px-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a href="/demo" className="w-full sm:w-auto group bg-gradient-to-r from-emerald-500 to-[#61CBB3] hover:from-emerald-600 hover:to-[#4fb3a0] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-3">
            <span>{t('finalCTA.button')}</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            {t('finalCTA.footer')}
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