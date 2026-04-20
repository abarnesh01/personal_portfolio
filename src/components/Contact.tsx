"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 bg-[#050505] py-32 px-4 md:px-12 overflow-hidden grid-bg" id="contact">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">Transmission</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Establish <br />
              <span className="text-gradient-cyan">
                Contact.
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
              Open for collaboration on cybersecurity research, AI safety, or high-performance web development.
              Systems are ready for input.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:abarnesh772@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <span className="text-lg font-mono">abarnesh772@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <SocialLink href="https://github.com/abarnesh01" icon={<GithubIcon />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/abarnesh-s-106a34314/" icon={<LinkedinIcon />} label="LinkedIn" />
              </div>
            </div>

            <a
              href="/Abarnesh_Resume_.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              Standard Resume
            </a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Identifier (Name)</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm"
                  placeholder="USER_ALPHA"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Comms Channel (Email)</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm"
                  placeholder="contact@entity.id"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/60 mb-2">Payload (Message)</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-cyan-500/50 transition-all font-mono text-sm resize-none"
                  placeholder="Awaiting data upload..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-black font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 transform active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : isSuccess ? (
                  "Transmission Received"
                ) : (
                  "Initialize Transmission"
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em]">
          <p>&copy; {new Date().getFullYear()} ABARNESH_S // NEURAL_SEC_PORTFOLIO</p>
        </footer>
      </div>
      <div className="absolute top-0 left-0 right-0 section-divider" />
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// Icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
