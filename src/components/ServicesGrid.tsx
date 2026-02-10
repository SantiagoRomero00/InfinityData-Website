import { Brain, MessageSquare, Code, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ServicesGrid = () => {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-20 sm:py-32 bg-brand-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-emerald-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] sm:auto-rows-[400px]">
          {/* Service 1: Automatización de Procesos - Large Bento Item */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] p-8 lg:p-12 flex flex-col relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-emerald-500/10 border border-white/5 bg-gradient-to-br from-[#1a2e2b] to-brand-slate-950">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-emerald-500/10 rounded-2xl flex items-center justify-center border border-brand-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-8 h-8 text-brand-emerald-400" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                {t('services.processAutomation.title')}
              </h3>

              <p className="text-lg text-slate-300 font-medium mb-8 max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
                {t('services.processAutomation.description')}
              </p>

              <div className="mt-auto">
                <a href="/demo?service=Automatización de procesos" className="inline-flex items-center gap-2 text-brand-emerald-400 font-bold hover:text-brand-emerald-300 transition-colors">
                  {t('services.processAutomation.button')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-emerald-500/10 rounded-full blur-[100px] group-hover:bg-brand-emerald-500/20 transition-all duration-700"></div>
          </div>

          {/* Service 2: Soporte al Cliente - Standard Bento Item */}
          <div className="md:col-span-1 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 border border-white/5 bg-[#1e292e]">
            <div className="relative z-10 flex flex-col h-full text-center items-center">
              <div className="mb-6">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 group-hover:rotate-12 transition-all duration-500">
                  <MessageSquare className="w-7 h-7 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {t('services.customerSupport.title')}
              </h3>

              <p className="text-base text-slate-300 opacity-70 mb-6">
                {t('services.customerSupport.description')}
              </p>

              <div className="mt-auto">
                <a href="/demo?service=Soporte al cliente" className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all">
                  {t('services.customerSupport.button')}
                </a>
              </div>
            </div>
          </div>

          {/* Service 3: Website Development - Standard Bento Item */}
          <div className="md:col-span-1 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 border border-white/5 bg-gradient-to-tr from-[#2d3748] to-[#1a202c]">
            <div className="relative z-10 flex flex-col h-full">
              <Code className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {t('services.websiteDevelopment.title')}
              </h3>
              <p className="text-base text-slate-300 opacity-70 mb-8">
                {t('services.websiteDevelopment.description')}
              </p>
              <div className="mt-auto">
                <a href="/demo?service=web-development" className="text-indigo-400 font-semibold hover:underline decoration-2 underline-offset-4">
                  {t('services.websiteDevelopment.button')}
                </a>
              </div>
            </div>
          </div>

          {/* Service 4: Integración de Clientes - Large Bento Item */}
          <div className="md:col-span-2 rounded-[2.5rem] p-8 lg:p-12 flex flex-col relative overflow-hidden group transition-all duration-500 border border-white/5 bg-brand-slate-900 shadow-inner shadow-white/5">
            <div className="relative z-10 flex flex-col h-full md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  {t('services.customerIntegration.title')}
                </h3>
                <p className="text-lg text-slate-400 mb-6 max-w-sm">
                  {t('services.customerIntegration.description')}
                </p>
                <a href="/demo?service=Integración de clientes" className="bg-white text-brand-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors inline-block text-center">
                  {t('services.customerIntegration.button')}
                </a>
              </div>

              {/* Abstract Visual Detail */}
              <div className="hidden lg:block w-48 h-48 relative opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute inset-0 border-4 border-dashed border-white rounded-3xl animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-8 bg-white/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;