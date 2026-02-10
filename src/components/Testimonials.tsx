import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Infinity Data transformed our customer support from a bottleneck into a competitive advantage. The automation is seamless.",
        author: "Elena Rodriguez",
        role: "COO at NexaGen"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-brand-slate-950">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <Quote className="w-20 h-20 text-brand-emerald-500/20 absolute -top-10 -left-10" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
                            "{testimonials[0].text}"
                        </h3>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-brand-emerald-500 to-cyan-500 rounded-full mb-4"></div>
                            <p className="text-white font-bold text-lg">{testimonials[0].author}</p>
                            <p className="text-slate-500 font-medium">{testimonials[0].role}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
