import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from '../hooks/useTranslation';
import ParticleField from './ParticleField';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-brand-slate-950 relative overflow-hidden pt-20">
      {/* Code-based 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Overlay */}
      <div className="min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-white tracking-tight leading-[0.9] mb-8 drop-shadow-2xl">
            <span className="text-white inline-block hover:scale-105 transition-transform duration-500">
              {t('hero.title.line1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-emerald-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent inline-block hover:brightness-110 transition-all duration-500 py-2">
              {t('hero.title.line2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-xl px-4 tracking-tight opacity-90">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <a
              href="/demo"
              className="group relative w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald-500 to-emerald-400 group-hover:from-brand-emerald-400 group-hover:to-brand-emerald-300 transition-all duration-300"></div>
              <span className="relative text-white flex items-center justify-center gap-2">
                {t('hero.ctaButton')}
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;