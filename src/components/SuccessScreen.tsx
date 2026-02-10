import { Link } from 'react-router-dom';
import { CheckCircle, Infinity, Mail, Calendar } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const SuccessScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-brand-slate-950 pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center relative z-10">
          {/* Success Icon */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-emerald-500 to-cyan-400 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-emerald-500/20 animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {t('success.title')}
          </h1>

          <div className="bg-brand-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 sm:p-12 max-w-2xl mx-auto mb-12 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-center mb-10">
              <div className="relative">
                <Infinity className="w-16 h-16 text-brand-emerald-400" />
                <div className="absolute inset-0 bg-brand-emerald-400 opacity-20 rounded-full blur-md"></div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
              {t('success.heading')}
            </h2>

            <p className="text-lg sm:text-2xl text-slate-400 mb-10 leading-relaxed font-medium tracking-tight">
              {t('success.description')}
            </p>

            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
              {[
                { icon: Mail, title: t('success.nextSteps.review.title'), desc: t('success.nextSteps.review.description') },
                { icon: Calendar, title: t('success.nextSteps.contact.title'), desc: t('success.nextSteps.contact.description') }
              ].map((step, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5">
                    <step.icon className="w-6 h-6 text-brand-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="w-full sm:w-auto bg-brand-emerald-500 hover:bg-brand-emerald-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl shadow-brand-emerald-500/10 text-center"
              >
                {t('success.buttons.backHome')}
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto bg-white/5 border-2 border-white/5 hover:border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 text-center"
              >
                {t('success.buttons.newRequest')}
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center opacity-50">
            <p className="text-slate-500 text-lg font-medium tracking-tight">
              {t('success.footer')} <span className="font-black text-brand-emerald-500">Infinity Data</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;