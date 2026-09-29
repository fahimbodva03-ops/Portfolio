"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const steps = [
      { target: 30, delay: 200 },
      { target: 60, delay: 400 },
      { target: 85, delay: 300 },
      { target: 100, delay: 250 },
    ];

    let currentStep = 0;
    let current = 0;

    const runStep = () => {
      if (currentStep >= steps.length) {
        setTimeout(() => setPhase("done"), 300);
        return;
      }
      const step = steps[currentStep];
      const increment = (step.target - current) / 20;
      let count = 0;

      const timer = setInterval(() => {
        count++;
        current += increment;
        setProgress(Math.min(Math.round(current), step.target));
        if (count >= 20) {
          clearInterval(timer);
          current = step.target;
          currentStep++;
          setTimeout(runStep, step.delay);
        }
      }, 20);
    };

    const initial = setTimeout(runStep, 300);
    return () => clearTimeout(initial);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === "loading" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020209]"
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
          }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-overlay opacity-30" />

          {/* Ambient orbs */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 orb orb-blue animate-float-slow opacity-50" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 orb orb-violet animate-float opacity-40" style={{ animationDelay: "3s" }} />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center glow-strong">
                <span
                  className="text-3xl font-bold gradient-text"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  FB
                </span>
              </div>
              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-[28px] border border-brand-500/20 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-[36px] border border-cyan-400/10" style={{ animation: "spin 30s linear infinite reverse" }} />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h1
                className="text-2xl font-bold text-white tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Fahim Bodva
              </h1>
              <p className="text-xs text-gray-500 tracking-[0.3em] uppercase mt-1 font-mono">
                Portfolio Loading
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-64"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600 font-mono">Initializing</span>
                <span className="text-xs text-cyan-400 font-mono">{progress}%</span>
              </div>
              <div className="h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-500 via-violet-400 to-cyan-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Floating code snippets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 flex-wrap justify-center max-w-xs"
            >
              {["HTML", "CSS", "JavaScript", "React", "Next.js"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.6, 0] }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="badge text-[10px]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
