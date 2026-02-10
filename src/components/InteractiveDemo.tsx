import { motion } from 'framer-motion';
import { Play, CheckCircle, Cpu, Zap, BarChart } from 'lucide-react';

const InteractiveDemo = () => {
    return (
        <section className="py-24 sm:py-32 bg-brand-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            See <span className="text-brand-emerald-400">Automation</span> in Action
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium tracking-tight">
                            Our AI engines handle complex workflows by breaking them down into logical,
                            efficient steps. Monitor performance in real-time with our integrated dashboard.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Zap, text: "99.9% Task Accuracy" },
                                { icon: Cpu, text: "Instant Response Time" },
                                { icon: BarChart, text: "Real-time Analytics" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white font-bold group">
                                    <div className="w-10 h-10 bg-brand-emerald-500/10 rounded-xl flex items-center justify-center border border-brand-emerald-500/20 group-hover:bg-brand-emerald-500/20 transition-all">
                                        <item.icon className="w-5 h-5 text-brand-emerald-400" />
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mock Dashboard Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-brand-slate-900 rounded-[2rem] border border-white/10 p-6 shadow-2xl relative z-10">
                            {/* Fake Dashboard Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="text-xs text-slate-500 font-mono">INFINITY_ENGINE_V2.0</div>
                            </div>

                            {/* Fake Workflow Nodes */}
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "Trigger: New Customer Inquiry", status: "complete", delay: 0 },
                                    { label: "AI Analysis: Classification", status: "processing", delay: 1 },
                                    { label: "Execution: Auto-Response Sent", status: "pending", delay: 2 }
                                ].map((node, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: node.delay + 0.5 }}
                                        className={`p-4 rounded-xl border ${node.status === 'processing' ? 'border-brand-emerald-500/50 bg-brand-emerald-500/5' : 'border-white/5 bg-white/2'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-white tracking-tight">{node.label}</span>
                                            {node.status === 'complete' ? (
                                                <CheckCircle className="w-4 h-4 text-brand-emerald-400" />
                                            ) : node.status === 'processing' ? (
                                                <div className="w-4 h-4 border-2 border-brand-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <Play className="w-4 h-4 text-slate-600" />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Fake Graph */}
                            <div className="mt-8 h-32 flex items-end gap-2 px-2">
                                {[40, 60, 45, 90, 65, 80, 50, 70, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                        className="flex-1 bg-brand-emerald-500/20 rounded-t-sm"
                                    ></motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald-500/10 blur-[100px] rounded-full -z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
