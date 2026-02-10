import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Settings, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const HowItWorks = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <section id="como-funciona" className="py-20 sm:py-32 bg-brand-slate-950 relative overflow-hidden">
      {/* Animated Background Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-emerald-500 to-cyan-500 origin-left z-20"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg sm:text-2xl text-slate-400 font-medium max-w-3xl mx-auto px-4 tracking-tight">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group relative"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-emerald-500 to-cyan-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-brand-emerald-500/20">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-4 right-1/4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-brand-slate-950 text-xl shadow-lg">
                  {step.number}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-lg text-slate-400 leading-relaxed px-4 font-medium">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[80%] w-[40%] h-px bg-gradient-to-r from-brand-emerald-500/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald-500/5 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
};

export default HowItWorks;