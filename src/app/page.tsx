"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Loading screen
import LoadingScreen from "@/components/LoadingScreen";

// Static components (no 3D, no heavy deps)
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import WhatIDo from "@/components/WhatIDo";
import HowIBuild from "@/components/HowIBuild";
import Vision from "@/components/Vision";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import PersonalMessage from "@/components/PersonalMessage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic import for Hero (contains R3F canvas — client-only)
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#020209] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border border-brand-500/30 animate-spin" />
    </div>
  ),
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start loading after a brief delay to let fonts settle
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleLoadComplete = () => {
    setShowContent(true);
  };

  return (
    <main className="min-h-screen bg-[#020209] overflow-x-hidden">
      {/* Loading screen */}
      {!showContent && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content — rendered behind loading screen, revealed after */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: showContent ? "auto" : "none",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Journey />
        <Projects />
        <HowIBuild />
        <Vision />
        <CurrentlyLearning />
        <PersonalMessage />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
