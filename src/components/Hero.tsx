"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden grid-bg" id="home">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/[0.02] rounded-full blur-[180px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 px-8 md:px-24 w-full max-w-7xl mx-auto">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">
              Systems Online
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Abarnesh{" "}
            <span className="text-gradient-cyan">S.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-4"
          >
            Cybersecurity Engineer & Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Designing <span className="text-cyan-400 font-medium">intelligent defense</span> systems.
            Focused on PII Masking, Anomaly Detection & AI Security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="group px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/Abarnesh_Resume_.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              ↓ Resume
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-white/10 text-white/70 font-semibold rounded-xl hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Hologram Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            transitionSpeed={1500}
            scale={1.03}
            gyroscope={true}
          >
            <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] hologram-container">
              {/* Outer Glow */}
              <div className="absolute inset-[-30px] bg-cyan-500/[0.08] rounded-[2rem] blur-[60px] animate-pulse" />

              {/* Hologram Image */}
              <img
                src="/profile.jpg"
                alt="Abarnesh S"
                className="relative z-10 w-full h-full object-cover object-[50%_20%] rounded-2xl hologram shadow-[0_0_60px_rgba(6,182,212,0.25),0_0_120px_rgba(6,182,212,0.08)]"
              />

              {/* Scanline */}
              <div className="absolute inset-0 scanline pointer-events-none rounded-2xl overflow-hidden z-20" />

              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/40 z-30" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/40 z-30" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/40 z-30" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/40 z-30" />
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-cyan-400/60 rounded-full" />
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
