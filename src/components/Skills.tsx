"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Monitor, Database, Code2, Globe, Cpu } from "lucide-react";
import { speak } from "@/components/lib/voice";

const skills = [
  {
    category: "Cybersecurity & AI",
    icon: Shield,
    items: ["Kali Linux", "Vulnerability Assessment", "Penetration Testing", "OCR (Tesseract)", "Anomaly Detection", "Threat Modeling"],
    color: "text-blue-400"
  },
  {
    category: "Frontend Engineering",
    icon: Monitor,
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Three.js"],
    color: "text-indigo-400"
  },
  {
    category: "Backend Systems",
    icon: Database,
    items: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
    color: "text-cyan-400"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  },
};

export default function Skills() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505]" id="skills">
      <motion.div
        onViewportEnter={() => speak("Accessing technical capabilities")}
        viewport={{ once: true, amount: 0.5 }}
      />
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tech <span className="text-gray-500">Stack</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            A specialized collection of tools and frameworks for modern security and development.
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
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] ${group.color}`}>
                    <group.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-xl text-xs md:text-sm text-gray-400 font-medium transition-colors hover:text-white hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
