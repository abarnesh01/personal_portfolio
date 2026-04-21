"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * Interactive Mouse Glow Background
 * 
 * FEATURES:
 * - Ultra-smooth tracking using framer-motion springs
 * - Multiple layers (Large glow, intense center, trailing ring)
 * - Real-time global mouse position tracking
 * - Safe for SSR/Hydration
 */
export default function CursorGlow() {
    // Standard motion values for mouse coordinates
    const mouseX = useMotionValue(-500); // Start off-screen
    const mouseY = useMotionValue(-500);

    // Spring physics for smooth movement
    const mainSpringConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const trailingSpringConfig = { damping: 40, stiffness: 100, mass: 1 };

    const smoothX = useSpring(mouseX, mainSpringConfig);
    const smoothY = useSpring(mouseY, mainSpringConfig);

    const trailingX = useSpring(mouseX, trailingSpringConfig);
    const trailingY = useSpring(mouseY, trailingSpringConfig);

    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            // Update motion values directly for performance
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    // Prevent hydration issues
    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-screen">
            {/* 1. Primary Large Cyan Ambient Glow */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px]"
            />

            {/* 2. Secondary Core Blue Glow (More concentrated) */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                }}
                className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]"
            />

            {/* 3. Small Intense Center Hotspot */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.6 : 0,
                }}
                className="absolute w-[100px] h-[100px] rounded-full bg-white/10 blur-[30px]"
            />

            {/* 4. Trailing Ring (Lagging effect) */}
            <motion.div
                style={{
                    left: trailingX,
                    top: trailingY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.3 : 0,
                    scale: isVisible ? 1 : 0.8,
                }}
                className="absolute w-[200px] h-[200px] rounded-full border border-cyan-400/20 blur-[5px]"
            >
                {/* Internal crosshair or bits for more "tech" feel */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/5" />
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-400/5" />
            </motion.div>
        </div>
    );
}
