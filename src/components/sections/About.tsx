"use client";

import { motion } from "framer-motion";
import { User, Target, Zap } from "lucide-react";

const stats = [
    { label: "Cups of Coffee", value: "500+", icon: <Zap className="text-yellow-400" /> },
    { label: "Projects Finished", value: "50+", icon: <Target className="text-red-400" /> },
    { label: "Happy Clients", value: "30+", icon: <User className="text-blue-400" /> },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am a passionate Full Stack Developer with a keen eye for detail and a drive for creating perfection.
                                My journey in tech began with a curiosity about how things work, which quickly evolved into a career
                                building complex systems and beautiful user interfaces.
                            </p>
                            <p>
                                With expertise in modern frameworks like React and Next.js, I specialize in crafting high-performance
                                web applications that don&apos;t just work well but feel amazing to use. I believe that every line of code
                                is an opportunity to create something extraordinary.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors border-white/5"
                                >
                                    <div className="mb-4 bg-white/5 p-3 rounded-xl">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-square relative rounded-3xl overflow-hidden glass border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 opacity-50 transition-opacity group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-white/10 absolute top-10 left-10 select-none">PASSION</div>
                                    <div className="text-6xl font-black text-white/10 absolute bottom-10 right-10 select-none">CODE</div>
                                    <p className="text-2xl font-semibold text-white/80 leading-snug">
                                        &quot;Turning ideas into digital reality is not just my job, it&apos;s my craft.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Abstract Decorations */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/20 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-purple/20 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
