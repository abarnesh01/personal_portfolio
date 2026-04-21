"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function JarvisBackground() {
    // Generate random particles
    const particles = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* 1. Base Layer: Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#050505] to-black" />

            {/* 2. Radial Glow Layer */}
            <div className="absolute inset-0 jarvis-radial opacity-60 animate-pulse-slow" />

            {/* 3. Grid Lines Layer */}
            <div className="absolute inset-0 jarvis-grid opacity-20" />

            {/* 4. Radar / Rotating Rings Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                >
                    {/* Concentric Rings */}
                    <div className="radar-ring w-full h-full" />
                    <div className="radar-ring w-[80%] h-[80%]" />
                    <div className="radar-ring w-[60%] h-[60%] border-dashed" />
                    <div className="radar-ring w-[40%] h-[40%]" />

                    {/* Technical Axis Lines */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/5 -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-400/5 -translate-x-1/2" />
                </motion.div>

                {/* Opposite rotating ring for contra-motion depth */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px]"
                >
                    <div className="radar-ring w-[90%] h-[90%] border-dotted border-cyan-400/10" />
                    <div className="radar-ring w-[50%] h-[50%] border-cyan-400/2" />
                </motion.div>
            </div>

            {/* 5. Floating Particles Layer */}
            <div className="absolute inset-0">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            y: [0, -100, 0],
                            x: [0, 50, 0]
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute rounded-full bg-cyan-400/40 blur-[1px]"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                        }}
                    />
                ))}
            </div>

            {/* 6. Scanline Effect Overlay (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </div>
    );
}
