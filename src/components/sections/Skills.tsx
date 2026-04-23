"use client";

import { motion } from "framer-motion";
import {
    FileJson,
    Layers,
    Wind,
    Cpu,
    Globe,
    Server,
    Database,
    Smartphone,
    Cloud,
    Terminal,
    Sparkles
} from "lucide-react";

const skills = [
    { name: "Frontend", icon: <Globe />, level: 95, color: "text-blue-400" },
    { name: "Backend", icon: <Server />, level: 85, color: "text-purple-400" },
    { name: "React / Next.js", icon: <FileJson />, level: 98, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <Wind />, level: 100, color: "text-teal-400" },
    { name: "TypeScript", icon: <FileJson />, level: 90, color: "text-blue-500" },
    { name: "Node.js", icon: <Terminal />, level: 88, color: "text-green-400" },
    { name: "Database", icon: <Database />, level: 80, color: "text-orange-400" },
    { name: "Framer Motion", icon: <Sparkles />, level: 92, color: "text-pink-400" },
    { name: "Cloud Services", icon: <Cloud />, level: 75, color: "text-indigo-400" },
    { name: "Mobile Dev", icon: <Smartphone />, level: 70, color: "text-red-400" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black/30">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    My <span className="text-gradient">Skills</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The technologies I use to bring vision to life. I stay updated with the latest industry standards to deliver modern solutions.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="glass-dark p-8 rounded-3xl group border-white/5 relative overflow-hidden"
                    >
                        {/* Background Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className={`w-12 h-12 mb-6 mx-auto ${skill.color} transition-transform group-hover:scale-110 duration-300`}>
                            {skill.icon}
                        </div>
                        <h3 className="text-white font-bold mb-4">{skill.name}</h3>

                        {/* Minimal Progress Bar */}
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className={`h-full bg-gradient-primary`}
                            />
                        </div>
                        <span className="text-[10px] text-gray-500 font-bold mt-2 inline-block uppercase tracking-widest">{skill.level}% Proficiency</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
