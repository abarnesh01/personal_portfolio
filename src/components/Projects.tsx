"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "./SpotlightCard";

// Project Data with Media & Layout Configuration
const projects = [
    {
        id: "pii-masking",
        title: "PII Masking Tool",
        category: "Cybersecurity • AI",
        description: "OCR-based data protection system for sensitive info.",
        longDescription: "An intelligent system that detects and masks sensitive information (PII) from images and documents using Tesseract OCR and OpenCV, ensuring data privacy and compliance.",
        techStack: ["Python", "Tesseract OCR", "OpenCV", "NumPy"],
        repo: "https://github.com/abarnesh01",
        demo: "#",
        color: "from-cyan-600/20 to-blue-500/20",
        hoverColor: "group-hover:from-cyan-600/40 group-hover:to-blue-500/40",
        span: "md:col-span-2 md:row-span-2",
        mediaType: "image",
        mediaUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        demoUrl: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "civic-ai-shield",
        title: "Civic AI Shield",
        category: "AI • Safety",
        description: "AI-powered system for malicious content prevention.",
        longDescription: "Designed to identify and prevent malicious or harmful content, enhancing digital safety through NLP and machine learning concepts.",
        techStack: ["Python", "Machine Learning", "NLP", "Scikit-Learn"],
        repo: "https://github.com/abarnesh01",
        demo: "#",
        color: "from-blue-600/20 to-indigo-500/20",
        hoverColor: "group-hover:from-blue-600/40 group-hover:to-indigo-500/40",
        span: "md:col-span-1 md:row-span-2",
        mediaType: "image",
        mediaUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        demoUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "network-monitor",
        title: "Network Monitoring Dashboard",
        category: "Security • Full Stack",
        description: "Real-time network traffic and anomaly detection.",
        longDescription: "A real-time dashboard that monitors network activity and detects anomalies, helping identify potential threats and suspicious behavior with live visualization.",
        techStack: ["React.js", "Node.js", "Socket.io", "Chart.js"],
        repo: "https://github.com/abarnesh01",
        demo: "#",
        color: "from-emerald-600/20 to-cyan-500/20",
        hoverColor: "group-hover:from-emerald-600/40 group-hover:to-cyan-500/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        demoUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    const selectedProject = projects.find((p) => p.id === selectedId);
    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    return (
        <section className="relative z-20 bg-transparent min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative content-reveal">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Tactical Deployments</p>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Selected <span className="text-gradient-cyan">Works</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                        Battle-tested software systems focused on defensive security, AI oversight, and intelligent interfaces.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layoutId={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`${project.span}`}
                            >
                                <Tilt
                                    tiltMaxAngleX={8}
                                    tiltMaxAngleY={8}
                                    perspective={1000}
                                    transitionSpeed={1500}
                                    scale={1.02}
                                    gyroscope={true}
                                    className="h-full"
                                >
                                    <SpotlightCard className="h-full rounded-3xl" glowColor="rgba(34, 211, 238, 0.2)">
                                        <div
                                            onClick={() => setSelectedId(project.id)}
                                            className="premium-card h-full cursor-pointer flex flex-col group relative overflow-hidden"
                                        >
                                            <div className="premium-card-border" />

                                            {/* Media Background */}
                                            <img
                                                src={project.mediaUrl}
                                                alt={project.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 mix-blend-overlay transition-opacity duration-500`} />

                                            {/* Darkness Falloff */}
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-1" />

                                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                                <div className="flex justify-between items-start">
                                                    <span className="inline-block px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-cyan-400 backdrop-blur-md uppercase tracking-widest">
                                                        {project.category}
                                                    </span>
                                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors drop-shadow-xl uppercase tracking-tighter">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors">
                                                        {project.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                                        {project.techStack.slice(0, 3).map(t => (
                                                            <span key={t} className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 bg-black/60 px-2.5 py-1 rounded-md border border-cyan-500/20 backdrop-blur-sm">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Corner Brackets */}
                                            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10 group-hover:border-cyan-500/40 transition-colors z-10" />
                                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10 group-hover:border-cyan-500/40 transition-colors z-10" />
                                        </div>
                                    </SpotlightCard>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                <motion.div layout className="flex justify-center mt-16">
                    {hasMore ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="btn-neon px-8 py-3.5 rounded-xl border border-white/10 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-cyan-500/5 transition-all overflow-hidden"
                        >
                            Expand Matrix
                        </motion.button>
                    ) : (
                        <div className="text-white/20 font-mono text-[9px] uppercase tracking-[0.4em]">End of Log</div>
                    )}
                </motion.div>

                {/* Modal View */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100]"
                            />
                            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-auto p-4 md:p-8">
                                <motion.div
                                    layoutId={selectedId}
                                    className="bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.15)] relative scrollbar-hide flex flex-col md:flex-row"
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 z-50 p-2.5 bg-black/60 hover:bg-red-500/20 hover:text-red-400 rounded-xl text-white/50 transition-all border border-white/10"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="w-full md:w-[45%] h-[300px] md:h-auto relative">
                                        <img
                                            src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                            alt={selectedProject.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent`} />
                                        <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-60`} />
                                    </div>

                                    <div className="w-full md:w-[55%] p-10 flex flex-col gap-8">
                                        <div>
                                            <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/5 uppercase tracking-[0.2em] mb-4 inline-block">
                                                {selectedProject.category}
                                            </span>
                                            <h3 className="text-4xl font-bold text-white tracking-tighter leading-tight uppercase">
                                                {selectedProject.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">Project Brief</h4>
                                            <p className="text-gray-400 leading-relaxed text-base">
                                                {selectedProject.longDescription}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">System Specs</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map(t => (
                                                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-8 border-t border-white/10 flex gap-4">
                                            <a
                                                href={selectedProject.repo}
                                                target="_blank"
                                                className="flex-1 py-4 bg-white text-black font-bold rounded-xl text-center hover:bg-cyan-100 transition-colors"
                                            >
                                                Repository
                                            </a>
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                className="flex-1 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl text-center hover:bg-white/10 transition-colors"
                                            >
                                                Manifest
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
