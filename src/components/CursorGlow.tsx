"use client";

import { useEffect } from "react";

export default function CursorGlow() {
    useEffect(() => {
        // Only run in browser
        if (typeof window === "undefined") return;

        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        document.body.appendChild(glow);

        const handleMouseMove = (e: MouseEvent) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (document.body.contains(glow)) {
                document.body.removeChild(glow);
            }
        };
    }, []);

    return null;
}
