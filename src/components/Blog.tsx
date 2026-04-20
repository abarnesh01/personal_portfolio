"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "./SpotlightCard";

const ARTICLES = [
  {
    title: "Mastering OCR for PII Masking",
    excerpt: "Exploring the challenges of detecting sensitive data in noisy images using Tesseract and OpenCV. Lessons learned from building an automated privacy tool.",
    category: "Security",
    readTime: "7 min read",
    color: "from-cyan-500 to-blue-500",
    link: "#",
  },
  {
    title: "The Future of AI in Threat Detection",
    excerpt: "How machine learning models are evolving to detect zero-day vulnerabilities and anomalous network patterns before they escalate.",
    category: "AI",
    readTime: "10 min read",
    color: "from-blue-600 to-indigo-600",
    link: "#",
  },
  {
    title: "Winning at CTFs: A Beginner's Guide",
    excerpt: "From basic OSINT to complex binary exploitation. A breakdown of the tools and mindset required to excel in Capture The Flag challenges.",
    category: "Offensive Security",
    readTime: "6 min read",
    color: "from-cyan-400 to-emerald-500",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="relative z-20 bg-[#050505] py-32 px-4 md:px-12 overflow-hidden grid-bg" id="blog">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Neural Data Nodes</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Security <span className="text-gradient-cyan">Insights</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Technical dissections of security vulnerabilities, AI implementations, and offensive security strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.03}
                gyroscope={true}
                className="h-full"
              >
                <SpotlightCard className="h-full rounded-2xl">
                  <a
                    href={article.link}
                    className="group relative block h-full premium-card p-8 flex flex-col"
                  >
                    <div className="premium-card-border" />

                    {/* HUD Corner Accent */}
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-500/40 transition-colors z-10" />

                    <div className="relative z-10 flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 uppercase tracking-[0.1em]">
                        {article.category}
                      </span>
                      <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-tight leading-snug">
                      {article.title}
                    </h3>

                    <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="relative z-10 flex items-center text-cyan-400 font-mono text-[10px] tracking-widest uppercase group-hover:translate-x-3 transition-transform duration-300">
                      Execute Read <span className="ml-2 font-sans">→</span>
                    </div>

                    {/* Animated underline reveal */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-700 z-10" />
                  </a>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 section-divider" />
    </section>
  );
}
