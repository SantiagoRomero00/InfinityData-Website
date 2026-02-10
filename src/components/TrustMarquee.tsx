import { motion } from 'framer-motion';

const logos = [
    "TechFlow", "DataNexus", "CloudScale", "NeuralLink", "AI-Core", "OptiLink", "Vortex", "Horizon"
];

const TrustMarquee = () => {
    return (
        <div className="py-20 bg-brand-slate-950/50 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm">
                    Trusted by Innovative Teams
                </p>
            </div>

            <div className="flex relative items-center">
                <motion.div
                    className="flex gap-20 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-4xl md:text-5xl font-black text-white/10 hover:text-white/30 transition-colors cursor-default select-none tracking-tighter">
                            {logo}
                        </span>
                    ))}
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-slate-950 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-slate-950 to-transparent z-10"></div>
            </div>
        </div>
    );
};

export default TrustMarquee;
