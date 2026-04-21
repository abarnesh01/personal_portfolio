"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden" id="home">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Teal Orb */}
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-500/[0.08] rounded-full blur-[150px] animate-pulse" />

        {/* Cinematic Orange/Amber Contrast Orb */}
        <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] bg-orange-500/[0.06] rounded-full blur-[150px]"
          style={{ animation: 'float 20s ease-in-out infinite alternate' }} />

        {/* Deep Blue Base Orb */}
        <div className="absolute bottom-[10%] left-[20%] w-[700px] h-[700px] bg-blue-600/[0.05] rounded-full blur-[180px]" />

        {/* Floating System Markers (Static Visuals) */}
        <div className="absolute top-1/4 right-[20%] w-24 h-[1px] bg-cyan-500/20" />
        <div className="absolute top-1/4 right-[20%] h-24 w-[1px] bg-cyan-500/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 px-8 md:px-24 w-full max-w-7xl mx-auto">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8 backdrop-blur-md"
          >
            <div className="relative">
              <span className="block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute inset-0" />
              <span className="relative block w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>
            <span className="text-cyan-400 font-mono text-[10px] items-center uppercase tracking-[0.4em] font-semibold">
              // Systems Online: Phase_01
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter text-white mb-8 leading-[0.95] perspective-1000">
            Abarnesh{" "}
            <span className="text-gradient-cyan drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">S.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-xl md:text-2xl font-medium tracking-tight mb-4"
          >
            Cybersecurity Engineer & Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-500/80 text-lg leading-relaxed max-w-xl mb-12"
          >
            Engineering <span className="text-cyan-400 font-mono tracking-wide px-1.5 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/10">Defensive Architecture</span> for the AI era.
            Mastering data sovereignty through PII masking and real-time anomaly detection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-5 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:scale-110 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="/Abarnesh_Resume_.docx"
              download
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 backdrop-blur-sm"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Hologram Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-shrink-0 z-20"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1500}
            transitionSpeed={2500}
            scale={1.05}
            gyroscope={true}
          >
            <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[540px] hologram-container group">
              {/* Complex Outer Glow Layers */}
              <div className="absolute inset-[-40px] bg-cyan-500/[0.1] rounded-[3rem] blur-[80px] animate-pulse" />
              <div className="absolute inset-[-10px] bg-blue-500/[0.05] rounded-[2rem] blur-[40px] group-hover:bg-cyan-400/[0.1] transition-all duration-700" />

              {/* Hologram Framework */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl z-0" />

              {/* Main Image */}
              <img
                src="/profile.jpg"
                alt="Abarnesh S"
                className="relative z-10 w-full h-full object-cover object-[50%_20%] rounded-2xl hologram 
                         shadow-[0_0_50px_rgba(6,182,212,0.3),0_0_100px_rgba(6,182,212,0.1)]
                         border border-white/10"
              />

              {/* Advanced Scanning Light Strip */}
              <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent z-30 pointer-events-none blur-sm"
              />

              <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4.1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 bg-cyan-300/60 z-30 pointer-events-none shadow-[0_0_15px_#22d3ee]"
              />

              {/* Static Scanline Texture Overlay */}
              <div className="absolute inset-0 scanline pointer-events-none rounded-2xl overflow-hidden z-25 opacity-40 mix-blend-overlay" />

              {/* Corner High-Tech Brackets */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-cyan-400/60 z-40" />
              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-cyan-400/60 z-40" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-cyan-400/60 z-40" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cyan-400/60 z-40" />

              {/* Tech Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 border border-cyan-500/30 px-4 py-1 rounded-full z-50 backdrop-blur-md">
                <p className="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.4em]">Subj_ID: Abarnesh_01</p>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase">Initialize_Scroll</span>
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
          />
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
