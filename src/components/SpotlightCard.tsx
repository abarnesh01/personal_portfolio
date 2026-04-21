"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export default function SpotlightCard({
    children,
    className = "",
    glowColor = "rgba(34, 211, 238, 0.15)"
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-30"
                style={{
                    background: `
                        radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 60%),
                        radial-gradient(250px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.08), transparent 50%)
                    `,
                    opacity,
                }}
            />
            {children}
        </div>
    );
}
