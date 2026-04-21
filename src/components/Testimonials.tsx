"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: "The PII Masking tool Abarnesh built is incredibly accurate. It has significantly enhanced our data privacy workflow.",
    name: "Security Lead",
    role: "KGiSL Tech Solutions",
    initials: "SL",
  },
  {
    quote: "His proactive approach to identifying network vulnerabilities is impressive. A highly skilled future security architect.",
    name: "Cyber Mentor",
    role: "Open Source Contributor",
    initials: "CM",
  },
  {
    quote: "The Network Monitoring dashboard provides exactly the kind of real-time insights our ops team needed.",
    name: "Project Lead",
    role: "Civic AI Initiative",
    initials: "PL",
  },
  {
    quote: "Abarnesh combines deep technical security knowledge with a great eye for modern, functional UI design.",
    name: "UI Engineer",
    role: "Design Collective",
    initials: "UE",
  },
];

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", role: "", quote: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setFormState({ name: "", role: "", quote: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 bg-transparent py-32 overflow-hidden" id="testimonials">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Integrity Validation</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Peer <span className="text-gradient-cyan">Insights</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Correlated feedback from security researchers, developers, and industry mentors.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-white transition-all text-xs font-mono uppercase tracking-widest backdrop-blur-sm"
          >
            [ New Feedback Entry ]
          </button>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge masks */}
        <div className="absolute top-0 left-0 w-40 h-full z-20 bg-linear-to-r from-[#050505] to-transparent" />
        <div className="absolute top-0 right-0 w-40 h-full z-20 bg-linear-to-l from-[#050505] to-transparent" />

        <div className="flex w-max lg:hover:[animation-play-state:paused]">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[380px] md:w-[480px] p-8 rounded-2xl glass-card shrink-0 group border border-white/5"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">{item.name}</h4>
                    <p className="text-xs font-mono text-cyan-500/60 uppercase tracking-widest tracking-tighter">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed relative sm:pl-4">
                  <span className="absolute left-0 top-0 text-cyan-400/20 text-4xl font-serif leading-none">"</span>
                  {item.quote}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-lg glass-card p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-2xl"
            >
              <h3 className="text-2xl font-bold font-mono text-white mb-2 uppercase tracking-tight">Secure Entry</h3>
              <p className="text-gray-500 text-sm mb-8 font-mono tracking-tighter">Enter testimonial parameters below.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Identifier</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm"
                    placeholder="Real name or handle"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Designation</label>
                  <input
                    type="text"
                    required
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm"
                    placeholder="Role / Nexus"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Encrypted Payload</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.quote}
                    onChange={(e) => setFormState({ ...formState, quote: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm resize-none"
                    placeholder="Data entry..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest transition-all"
                  >
                    Abort
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-black font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Transmitting..." : submitStatus === "success" ? "Received" : "Transmit"}
                  </button>
                </div>
              </form>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cyan-500/20" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="absolute top-0 left-0 right-0 section-divider" />
    </section>
  );
}
