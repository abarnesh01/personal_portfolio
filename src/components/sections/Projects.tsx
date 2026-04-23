"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "EcoSphere Dashboard",
        category: "Full Stack Web App",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Supabase", "Chart.js"],
        description: "A real-time environmental monitoring dashboard with advanced data visualization.",
    },
    {
        title: "Nova NFT Marketplace",
        category: "Web3 / Blockchain",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Ethereum", "Solidity", "Framer Motion"],
        description: "Premium NFT marketplace with smooth transitions and wallet integration.",
    },
    {
        title: "Pulse Social Media",
        category: "Full Stack Web App",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        description: "Performance optimized social network with real-time messaging and notifications.",
    },
    {
        title: "Vertex AI Platform",
        category: "AI / ML Integration",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "OpenAI API", "Python", "Radix UI"],
        description: "Unified workspace for AI agents and generative content management.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Selected <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            A showcase of my recent work, combining technical excellence with creative problem solving.
                        </p>
                    </div>
                    <a href="#" className="text-accent-blue font-bold flex items-center gap-2 hover:underline">
                        View All Projects <ArrowUpRight size={18} />
                    </a>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        {/* Project Image Wrapper */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 glass mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                                <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                    <Github size={24} />
                                </button>
                                <button className="w-14 h-14 rounded-full bg-gradient-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                                    <ExternalLink size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="px-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-tighter font-bold glass rounded-full text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
