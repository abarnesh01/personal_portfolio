"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HUDOverlay() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", { hour12: false }));
        };
        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">

            {/* ═══ CORNER BRACKETS ═══ */}
            {/* Top-Left */}
            <div className="absolute top-6 left-6">
                <div className="w-16 h-16 border-t-2 border-l-2 border-cyan-400/30" />
                <p className="text-cyan-500/40 font-mono text-[9px] mt-1 tracking-[0.3em] uppercase">SYS.INIT</p>
            </div>

            {/* Top-Right */}
            <div className="absolute top-6 right-6 text-right">
                <div className="w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 ml-auto" />
                <p className="text-cyan-500/40 font-mono text-[9px] mt-1 tracking-wider">{time}</p>
            </div>

            {/* Bottom-Left */}
            <div className="absolute bottom-6 left-6">
                <p className="text-cyan-500/30 font-mono text-[8px] mb-1 tracking-[0.2em] uppercase">Shield Protocol v3.1</p>
                <div className="w-16 h-16 border-b-2 border-l-2 border-cyan-400/30" />
            </div>

            {/* Bottom-Right */}
            <div className="absolute bottom-6 right-6">
                <p className="text-cyan-500/30 font-mono text-[8px] mb-1 tracking-wider text-right uppercase">Status: Online</p>
                <div className="w-16 h-16 border-b-2 border-r-2 border-cyan-400/30 ml-auto" />
            </div>

            {/* ═══ CENTER ROTATING RING ═══ */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-cyan-500/[0.06] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* Middle Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-dashed border-cyan-500/[0.04] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* Inner Ring - with notch markers */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-500/[0.08] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    {/* Notch markers */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-cyan-400/20" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-cyan-400/20" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-3 bg-cyan-400/20" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] w-3 bg-cyan-400/20" />
                </motion.div>
            </div>

            {/* ═══ TOP STATUS BAR ═══ */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            {/* ═══ SIDE DATA STREAMS ═══ */}
            <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-3 opacity-30">
                {["NEURAL", "SHIELD", "CRYPTO", "RECON"].map((label, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-cyan-400 animate-pulse" : "bg-white/20"}`} />
                        <span className="text-[8px] font-mono text-cyan-500/60 tracking-widest">{label}</span>
                    </div>
                ))}
            </div>

            {/* Right side metrics */}
            <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-2 items-end opacity-25">
                {[
                    { label: "CPU", value: "12%" },
                    { label: "MEM", value: "48%" },
                    { label: "NET", value: "●" },
                    { label: "SEC", value: "A+" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-white/40 tracking-wider">{item.label}</span>
                        <span className="text-[9px] font-mono text-cyan-400/60">{item.value}</span>
                    </div>
                ))}
            </div>

            {/* ═══ BOTTOM SYSTEM BAR ═══ */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3">
                <div className="flex items-center gap-4 opacity-20">
                    <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/40" />
                    <span className="text-[8px] font-mono text-cyan-400 tracking-[0.4em] uppercase">Abarnesh Systems</span>
                    <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/40" />
                </div>
            </div>
        </div>
    );
}
