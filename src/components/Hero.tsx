import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-[#F5F5F7] relative overflow-hidden pt-20">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/v6BkYhcuSt0MMjhy/scene.splinecode"></spline-viewer>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content Overlay */}
      <div className="min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 sm:mb-8 drop-shadow-2xl">
            <span className="text-white">{t('hero.title.line1')}</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-[#61CBB3] bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-normal max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed drop-shadow-xl px-4">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a href="/demo" className="w-full sm:w-auto bg-gradient-to-r from-emerald-400 to-emerald-200 hover:from-emerald-500 hover:to-emerald-300 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-[17px] transition-all duration-200 shadow-2xl hover:shadow-emerald-500/25 inline-block text-center">
              {t('hero.ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;