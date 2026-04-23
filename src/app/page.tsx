import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ParticlesBg from "@/components/ui/ParticlesBg";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-background" />
      <ParticlesBg />

      {/* Content Layout */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
