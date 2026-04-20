"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // Opacity transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 1]);

    // Parallax Y movement
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);
    const y4 = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-white mix-blend-difference">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center p-8"
            >
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">Abarnesh S.</h1>
                    <p className="text-xl md:text-2xl font-light text-gray-300">Cybersecurity Engineer & Full Stack Developer.</p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
            >
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">Designing <span className="text-cyan-500">intelligent defense</span> systems in a digital age.</h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
            >
                <div className="max-w-2xl text-right ml-auto">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">Focusing on <span className="text-blue-500">PII Masking</span>, Anomaly Detection & AI Security.</h2>
                </div>
            </motion.div>

            {/* Section 4: Detailed About */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-24 gap-12"
            >
                {/* 3D Avatar */}
                <div className="w-full md:w-1/3 h-[300px] md:h-[400px] relative">
                    <iframe
                        src="https://my.spline.design/characternight-36e7a20349c25608bdfc78572e9a5628/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="scale-125"
                    />
                </div>

                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Mission Statement</h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        I am Abarnesh S, a Cybersecurity Engineering student at KGiSL Institute of Technology.
                        I bridge the gap between offensive security and intelligent defense.
                        By combining AI-driven systems with robust full-stack development,
                        I build applications that don't just protect—they adapt and respond
                        proactively to ever-evolving global threats.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
