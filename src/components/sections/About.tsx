"use client";

import { motion } from "framer-motion";
import { User, Shield, Zap, Terminal } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const stats = [
    { label: "Systems Breached (CTFs)", value: "150+", icon: <Zap className="text-cyan-400" /> },
    { label: "Security Projects", value: "25+", icon: <Shield className="text-blue-400" /> },
    { label: "Vulnerabilities Found", value: "40+", icon: <Terminal className="text-purple-400" /> },
];

export default function About() {
    return (
        <section id="about" className="relative z-20 bg-transparent py-32 px-4 md:px-12 overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/[0.03] rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Interactive Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 w-full"
                    >
                        <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Core_Identity</p>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                            About <span className="text-gradient-cyan">Agent</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                            <p className="relative pl-6 border-l border-cyan-500/30">
                                <span className="absolute left-0 top-0 text-cyan-500 font-mono text-xs opacity-50">01</span>
                                I am <span className="text-white font-semibold">Abarnesh S</span>, a Cybersecurity Engineer and Full Stack Architect dedicated to engineering
                                <span className="text-cyan-300"> resilient digital fortresses</span>. My approach merges offensive security knowledge
                                with sophisticated defensive development.
                            </p>
                            <p className="relative pl-6 border-l border-cyan-500/10">
                                <span className="absolute left-0 top-0 text-cyan-500 font-mono text-xs opacity-30">02</span>
                                With expertise in React, Next.js, and Python, I specialize in crafting systems that prioritize
                                <span className="text-blue-300"> data sovereignty</span> and real-time threat neutralization. I believe top-tier design
                                should be as secure as it is stunning.
                            </p>
                        </div>

                        {/* Interactive Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="premium-card p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5">
                                        <div className="premium-card-border" />
                                        <div className="mb-4 bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-1 tracking-tighter group-hover:text-cyan-400 transition-colors">{stat.value}</h3>
                                        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-gray-300 transition-colors">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full relative"
                    >
                        <SpotlightCard className="rounded-3xl" glowColor="rgba(34, 211, 238, 0.1)">
                            <div className="aspect-square relative rounded-3xl overflow-hidden glass-dark p-12 border border-white/5 flex items-center justify-center group overflow-hidden">
                                <div className="premium-card-border" />

                                {/* Abstract Background Elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.05] blur-3xl rounded-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/[0.05] blur-3xl rounded-full" />

                                <div className="relative z-10 text-center">
                                    <div className="text-7xl font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none tracking-[0.5em] group-hover:text-cyan-500/[0.05] transition-colors duration-700">
                                        SHIELD
                                    </div>
                                    <p className="text-2xl md:text-3xl font-bold text-white/80 leading-snug tracking-tighter uppercase italic">
                                        &quot;Securing the <span className="text-cyan-400">Future</span> by <span className="text-blue-400">Engineering</span> the Present.&quot;
                                    </p>
                                    <div className="mt-8 flex justify-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-[1px] bg-cyan-500" />
                                        <div className="w-2 h-2 rounded-full border border-cyan-500 animate-ping" />
                                        <div className="w-8 h-[1px] bg-cyan-500" />
                                    </div>
                                </div>

                                {/* HUD Corner Detail */}
                                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10 group-hover:border-cyan-500/40 transition-colors" />
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/20 tracking-[0.4em] uppercase">Security_Protocol_V3.1</div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}
