import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 bg-brand-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#1a2e2b] to-brand-slate-900 rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden border border-white/5">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 tracking-tight">
              {t('finalCTA.title')}
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto opacity-80">
              {t('finalCTA.subtitle')}
            </p>
            <div className="flex justify-center content-center">
              <a
                href="/demo"
                className="group relative px-12 py-5 rounded-full font-black text-xl overflow-hidden transition-all duration-300 shadow-2xl shadow-brand-emerald-500/10"
              >
                <div className="absolute inset-0 bg-brand-emerald-500 group-hover:bg-brand-emerald-400 transition-all duration-300"></div>
                <span className="relative text-white flex items-center gap-3">
                  {t('finalCTA.button')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-emerald-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;