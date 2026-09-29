"use client";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

// Lazy load the 3D scene to avoid SSR issues
const HeroScene = lazy(() => import("./three/HeroScene"));

const words = ["Digital Experiences", "Modern Web Apps", "Clean Interfaces", "Full-Stack Solutions"];

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text">{displayed}</span>
      <span className="inline-block w-[2px] h-[0.9em] bg-cyan-400 ml-1 animate-blink align-middle" />
    </span>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="text-[10px] text-gray-500 tracking-[0.35em] uppercase font-mono">
        Scroll
      </span>
      <div className="w-px h-14 bg-gradient-to-b from-brand-500/60 to-transparent relative overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="three-canvas-container">
        {mounted && (
          <Canvas
            camera={{ position: [0, 0.5, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
          >
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(2,2,9,0.6) 60%, rgba(2,2,9,0.95) 100%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] grid-overlay opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-gray-400 tracking-wide font-mono">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="block text-white">FAHIM</span>
            <span className="block gradient-text text-glow">BODVA</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4"
        >
          <p className="text-sm text-gray-500 tracking-[0.3em] uppercase font-mono mb-3">
            Aspiring Full-Stack Web Developer
          </p>
        </motion.div>

        {/* Typewriter headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
            Building Ideas Into{" "}
            <br className="sm:hidden" />
            <TypewriterText />
          </h2>
        </motion.div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          An aspiring Full-Stack Web Developer passionate about technology,
          problem-solving, and creating modern, meaningful digital experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl btn-primary text-sm font-semibold tracking-wide group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl btn-outline text-sm font-semibold tracking-wide"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </motion.a>
        </motion.div>

        {/* Tech stack hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-4 flex-wrap"
        >
          <span className="text-xs text-gray-600 font-mono tracking-wider">WORKING WITH</span>
          {["HTML", "CSS", "JavaScript", "React"].map((tech) => (
            <span key={tech} className="badge text-[11px]">
              {tech}
            </span>
          ))}
          <span className="text-xs text-gray-600 font-mono tracking-wider">& LEARNING MORE</span>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
