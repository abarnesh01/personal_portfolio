"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
    "Initializing System...",
    "Scanning Identity...",
    "Analyzing Profile...",
    "Access Granted"
];

const BAR_COUNT = 32;

function VoiceWaveform({ isSpeaking }: { isSpeaking: boolean }) {
    const [bars, setBars] = useState<number[]>(Array(BAR_COUNT).fill(0.1));
    const animRef = useRef<number | null>(null);

    useEffect(() => {
        if (isSpeaking) {
            const animate = () => {
                setBars(
                    Array(BAR_COUNT)
                        .fill(0)
                        .map(() => 0.15 + Math.random() * 0.85)
                );
                animRef.current = requestAnimationFrame(animate);
            };
            // Throttle to ~20fps for smooth but performant animation
            const interval = setInterval(() => {
                cancelAnimationFrame(animRef.current!);
                animRef.current = requestAnimationFrame(animate);
            }, 50);
            return () => {
                clearInterval(interval);
                if (animRef.current) cancelAnimationFrame(animRef.current);
            };
        } else {
            setBars(Array(BAR_COUNT).fill(0.1));
        }
    }, [isSpeaking]);

    return (
        <div className="flex items-center justify-center gap-[3px] h-16 mt-6">
            {bars.map((scale, i) => (
                <div
                    key={i}
                    className="w-[3px] rounded-full bg-cyan-400"
                    style={{
                        height: "100%",
                        transform: `scaleY(${scale})`,
                        transition: "transform 80ms ease-out",
                        opacity: 0.5 + scale * 0.5,
                        boxShadow: isSpeaking
                            ? `0 0 ${4 + scale * 6}px rgba(6,182,212,${0.3 + scale * 0.4})`
                            : "none",
                    }}
                />
            ))}
        </div>
    );
}

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = useCallback((text: string) => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = 0.9;
        msg.pitch = 0.8;
        msg.volume = 0.8;

        msg.onstart = () => setIsSpeaking(true);
        msg.onend = () => setIsSpeaking(false);
        msg.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(msg);
    }, []);

    const startSystem = () => {
        setHasStarted(true);
        speak("Welcome back, Abarnesh. Systems are online.");
    };

    useEffect(() => {
        if (!hasStarted) return;

        const duration = 4000;
        const interval = 30;
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(onComplete, 500);
                    }, 500);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        return () => {
            clearInterval(timer);
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, [hasStarted, onComplete]);

    useEffect(() => {
        if (progress > 25 && stepIndex === 0) setStepIndex(1);
        if (progress > 50 && stepIndex === 1) setStepIndex(2);
        if (progress > 85 && stepIndex === 2) setStepIndex(3);
    }, [progress, stepIndex]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
                >
                    {!hasStarted ? (
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-24 h-24 border-2 border-cyan-500/30 rounded-full flex items-center justify-center mb-8"
                            >
                                <div className="w-16 h-16 bg-cyan-500/10 rounded-full blur-md animate-pulse" />
                            </motion.div>
                            <button
                                onClick={startSystem}
                                className="group relative px-8 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono tracking-widest uppercase hover:bg-cyan-500/10 transition-all overflow-hidden"
                            >
                                <span className="relative z-10">Initialize System</span>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform" />
                            </button>
                            <p className="text-white/20 font-mono text-[10px] mt-4 uppercase tracking-tighter">System Standby: Awaiting Input</p>
                        </div>
                    ) : (
                        <>
                            {/* Background Noise */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                            <div className="relative flex flex-col items-center">
                                {/* Profile Scanning Container */}
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6">
                                    {/* Outer Glow Ring */}
                                    <div className="absolute inset-[-20px] border border-cyan-500/20 rounded-full animate-pulse" />
                                    <div className="absolute inset-[-10px] border border-blue-500/10 rounded-full animate-ping" />

                                    {/* Image Container */}
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-gray-900">
                                        <img
                                            src="/profile.jpg"
                                            alt="Scanning"
                                            className="w-full h-full object-cover object-[50%_25%] grayscale"
                                        />

                                        {/* Scanning Line */}
                                        <motion.div
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20"
                                        />

                                        {/* Overlay Tint */}
                                        <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
                                    </div>
                                </div>

                                {/* Voice Waveform Visualizer */}
                                <VoiceWaveform isSpeaking={isSpeaking} />

                                {/* Loading text */}
                                <div className="text-center min-h-[4rem] mt-4">
                                    <motion.p
                                        key={stepIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-cyan-400 font-mono text-lg md:text-xl tracking-widest uppercase mb-4 glitch-text"
                                    >
                                        {LOADING_STEPS[stepIndex]}
                                    </motion.p>

                                    {/* Progress Bar */}
                                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <p className="text-white/40 font-mono text-xs mt-2 tracking-tighter">
                                        {Math.round(progress)}%
                                    </p>
                                </div>
                            </div>

                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.02] glitch-overlay" />
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
