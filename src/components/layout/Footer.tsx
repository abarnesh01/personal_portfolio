import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <span className="text-white font-bold text-xs">AB</span>
                        </div>
                        <span className="text-lg font-bold tracking-tighter">ABARNESH</span>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs">
                        Built with Next.js, Tailwind CSS and Framer Motion. Focused on creating premium digital experiences.
                    </p>
                </div>

                <div className="flex gap-6">
                    {[
                        { icon: <Github size={20} />, href: "#" },
                        { icon: <Twitter size={20} />, href: "#" },
                        { icon: <Linkedin size={20} />, href: "#" },
                        { icon: <Instagram size={20} />, href: "#" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-blue transition-all"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Abarnesh. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
