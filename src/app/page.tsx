"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import IntroLoader from "@/components/IntroLoader";
import HUDOverlay from "@/components/HUDOverlay";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic import for Three.js (avoid SSR issues)
const AvatarScene = dynamic(() => import("@/components/AvatarScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="bg-transparent min-h-screen text-white overflow-x-hidden noise-bg">
      <IntroLoader onComplete={() => setIsLoaded(true)} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Persistent HUD Overlay */}
            <HUDOverlay />

            <Hero />

            {/* 3D Avatar Section */}
            <section className="relative bg-transparent py-20 overflow-hidden" id="avatar">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-cyan-400/50 font-mono text-[10px] uppercase tracking-[0.4em]"
                >
                  Security Core Interface
                </motion.p>
              </div>
              <AvatarScene />
              <div className="section-divider mt-20" />
            </section>

            <Projects />
            <Testimonials />
            <Blog />
            <Skills />
            <Timeline />
            <Dock />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

