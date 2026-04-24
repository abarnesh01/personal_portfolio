import { Github, Twitter, Linkedin, Instagram, Terminal, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative py-20 bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Terminal className="text-cyan-400 w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">ABARNESH_SYSTEMS</span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8 font-mono">
                            // High-performance digital architect and cybersecurity engineer.
                            Focused on offensive-defense web structures and neural-grade UI patterns.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={18} />, href: "https://github.com/abarnesh01" },
                                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/abarnesh-s-106a34314/" },
                                { icon: <Twitter size={18} />, href: "#" },
                                { icon: <Instagram size={18} />, href: "#" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">Sub_Systems</h4>
                        <ul className="space-y-3 text-sm text-gray-500 font-mono">
                            <li><a href="#about" className="hover:text-cyan-400 transition-colors tracking-tight">Identity_Node</a></li>
                            <li><a href="#skills" className="hover:text-cyan-400 transition-colors tracking-tight">Arsenal_Module</a></li>
                            <li><a href="#projects" className="hover:text-cyan-400 transition-colors tracking-tight">Deployment_Grid</a></li>
                            <li><a href="#journey" className="hover:text-cyan-400 transition-colors tracking-tight">Timeline_Path</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">System_Status</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Cpu size={14} className="text-cyan-500" />
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active_Kernel: v6.12.0</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Network size={14} className="text-blue-500" />
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Latency: 14ms (Optimal)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} ABARNESH_S // ALL_ACCESS_RESTRICTED
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                        <span className="hover:text-cyan-400 cursor-pointer transition-colors">Safety_Protocols</span>
                        <span className="hover:text-cyan-400 cursor-pointer transition-colors">Neural_Link</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
