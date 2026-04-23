"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="hero-glow" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent-blue font-bold tracking-widest mb-4 uppercase text-sm"
                    >
                        Welcome to my portfolio
                    </motion.h4>
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter"
                    >
                        Hi, I&apos;m <span className="text-gradient">Abarnesh</span>
                    </motion.h1>
                    <div className="h-12 md:h-16 mb-6">
                        <span className="text-2xl md:text-4xl font-bold text-gray-300">
                            <Typewriter
                                words={[
                                    "Creative Developer",
                                    "Full Stack Developer",
                                    "UI/UX Enthusiast",
                                    "Problem Solver"
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                        I build modern, high-performance web experiences with a focus on premium design and smooth user interaction.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-primary text-white font-bold flex items-center gap-2 glow-blue"
                        >
                            View Projects <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/10 transition-colors text-white font-bold flex items-center gap-2"
                        >
                            Contact Me <Download size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center items-center"
                >
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-accent-blue/20 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] md:w-[520px] md:h-[520px] border border-accent-purple/20 rounded-full border-dashed"
                        />
                    </div>

                    {/* Profile Image Container */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-[280px] h-[400px] md:w-[380px] md:h-[550px]"
                    >
                        {/* The Image */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl z-10 group">
                            <Image
                                src="/profile.jpg"
                                alt="Abarnesh"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Glow Effect behind Image */}
                        <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl -z-10" />

                        {/* Floating Stats or Tags (Optional/Extra) */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-4 top-20 glass p-4 rounded-2xl z-20 hidden md:block"
                        >
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Experience</p>
                            <p className="text-xl font-bold text-gradient">3+ Years</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -left-10 bottom-20 glass p-4 rounded-2xl z-20 hidden md:block"
                        >
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Projects</p>
                            <p className="text-xl font-bold text-gradient">50+ Completed</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
