"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "./SpotlightCard";

const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cyan-400">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Layout: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  ),
  Server: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
};

const skills = [
  {
    category: "Cybersecurity & AI",
    icon: Icons.Shield,
    items: ["Kali Linux", "Vulnerability Assessment", "Penetration Testing", "OCR (Tesseract)", "Anomaly Detection", "Threat Modeling"],
  },
  {
    category: "Frontend Engineering",
    icon: Icons.Layout,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend Systems",
    icon: Icons.Server,
    items: ["Node.js", "Express.js", "Python", "MongoDB", "REST APIs", "Socket.io"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#050505] py-32 px-4 md:px-12 overflow-hidden grid-bg" id="skills">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Capabilities</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Technical{" "}
            <span className="text-gradient-cyan">Arsenal</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            A comprehensive stack built for offensive security, intelligent defense, and scalable application development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((group, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.02}
                gyroscope={true}
                className="h-full"
              >
                <SpotlightCard className="h-full rounded-2xl">
                  <div className="premium-card p-8 h-full flex flex-col group relative overflow-hidden">
                    <div className="premium-card-border" />

                    <div className="relative z-10 flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.07] transition-colors shadow-inner">
                        <group.icon />
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider">{group.category}</h3>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto">
                      {group.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="skill-pill px-4 py-2 bg-white/[0.03] rounded-lg text-xs md:text-sm text-gray-400 border border-white/[0.06] cursor-default font-mono transition-all hover:text-white hover:border-white/20 hover:bg-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-500/40 transition-colors z-10" />
                  </div>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
