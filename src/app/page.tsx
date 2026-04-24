"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import ParticlesBg from "@/components/ui/ParticlesBg";
import IntroLoader from "@/components/IntroLoader";
import HUDOverlay from "@/components/HUDOverlay";
import Dock from "@/components/Dock";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence mode="wait">
        {loading ? (
          <IntroLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Background Layer */}
            <div className="fixed inset-0 -z-20 bg-background" />
            <ParticlesBg />
            <CursorGlow />

            {/* Futuristic HUD & Navigation */}
            <HUDOverlay />
            <Navbar />
            <Dock />

            {/* Main Sections */}
            <div className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Blog />
              <Testimonials />
              <Contact />
              <Footer />
            </div>

            {/* Global Vignette/Scanlines */}
            <div className="fixed inset-0 pointer-events-none z-[100] scanline opacity-10" />
            <div className="fixed inset-0 pointer-events-none z-[101] bg-radial-vignette" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
