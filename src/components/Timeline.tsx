"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
  {
    year: "2024 - 2028",
    title: "Bachelor of Engineering in Cybersecurity",
    org: "KGiSL Institute of Technology",
    description: "Deepening expertise in real-world security systems, threat detection, and advanced Linux environments. Active in CTF challenges and security project development.",
    type: "education",
  },
  {
    year: "2024",
    title: "Certified Cybersecurity Professional",
    org: "Google & Cisco",
    description: "Earned Google Cybersecurity Professional and Cisco Introduction to Cybersecurity certifications, mastering the fundamentals of network security and defensive operations.",
    type: "milestone",
  },
  {
    year: "Project Phase",
    title: "Security System Independent Developer",
    org: "Self-Initiated Projects",
    description: "Developed sophisticated tools including an OCR-based PII masking system and a real-time network monitoring dashboard using React and Node.js.",
    type: "work",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-20 bg-transparent min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="journey">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Progression Log</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A linear progression of systems mastered, certifications earned, and architectural milestones achieved.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-linear-to-b from-transparent via-cyan-500/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Point on Line */}
      <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-cyan-500 rounded-full border border-cyan-400 transform -translate-x-1/2 z-10 shadow-[0_0_15px_#22d3ee]">
        <div className="absolute inset-[-4px] bg-cyan-400/20 blur-sm rounded-full animate-ping" />
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
        <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative">
          {/* Year Badge */}
          <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} mb-4`}>
            <span className="text-[10px] text-cyan-400 font-mono border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/5 mb-3 w-fit tracking-[0.2em] uppercase">
              {item.year}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
              {item.title}
            </h3>
          </div>

          <p className="text-xs text-blue-400 mb-4 font-mono uppercase tracking-[0.2em]">
            // {item.org}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Decorative Corner Bracket (only on hover) */}
          <div className={`absolute top-4 ${isEven ? "left-4" : "right-4"} w-4 h-4 border-t-2 border-${isEven ? "l" : "r"}-2 border-cyan-500/0 group-hover:border-cyan-500/40 transition-all duration-300`} />
        </div>
      </div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
