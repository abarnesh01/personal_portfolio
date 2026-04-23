"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Senior Full Stack Developer",
        company: "TechFlow Systems",
        period: "2023 - Present",
        desc: "Leading a team of 5 developers. Architecting scalable cloud solutions using AWS and Next.js. Increased platform performance by 40% through optimization.",
    },
    {
        type: "work",
        title: "Software Engineer",
        company: "Digital Edge Agency",
        period: "2021 - 2023",
        desc: "Developed pixel-perfect responsive frontends for premium clients. Implemented complex animations and interactive components using Framer Motion.",
    },
    {
        type: "edu",
        title: "B.Tech in Computer Science",
        company: "National Institute of Technology",
        period: "2017 - 2021",
        desc: "Specialized in Web technologies and Human-Computer Interaction. Graduated with honors.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black/40">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        My <span className="text-gradient">Journey</span>
                    </motion.h2>
                    <p className="text-gray-400">A timeline of my professional growth and academic background.</p>
                </div>

                <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px]">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative mb-12 flex flex-col ${i % 2 === 0 ? "md:items-end md:text-right md:pr-12" : "md:items-start md:text-left md:pl-12"}`}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute top-0 left-[-9px] md:left-1/2 md:translate-x-[-50%] w-4 h-4 bg-gradient-primary rounded-full glow-blue z-10" />

                            {/* Content Card */}
                            <div className={`w-full md:w-[calc(100%-2rem)] max-w-md glass p-8 rounded-[2rem] hover:bg-white/10 transition-colors border-white/5`}>
                                <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}>
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue">
                                        {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                    </div>
                                    <div>
                                        <span className="text-accent-purple font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white leading-tight">{exp.title}</h3>
                                    </div>
                                </div>
                                <p className="text-accent-blue font-semibold mb-3">{exp.company}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
