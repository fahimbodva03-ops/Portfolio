"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const messageLines = [
  "There is a lot more to learn.",
  "There will be new technologies to explore,",
  "difficult problems to solve,",
  "projects that challenge my current knowledge,",
  "and countless opportunities to improve.",
  "",
  "And that is exactly what excites me.",
];

const finalLines = [
  { text: "I'm not just learning to code.", size: "large", highlight: false },
  { text: "I'm learning to build.", size: "large", highlight: true },
];

export default function PersonalMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const finalRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const finalInView = useInView(finalRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <>
      {/* Personal message section */}
      <section id="message" ref={sectionRef} className="relative section-padding overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px divider-glow" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] orb orb-blue opacity-8" />
        </motion.div>

        {/* Grid */}
        <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
            <span className="section-label">The Journey Ahead</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>

          {/* Opening line */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-8"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="text-white/50">I&apos;m still at the beginning of my</span>
            <br />
            <span className="gradient-text">development journey.</span>
          </motion.h2>

          {/* Message lines */}
          <div className="space-y-1 mb-12">
            {messageLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: line === "" ? 0 : 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className={`text-gray-${line === "And that is exactly what excites me." ? "300 text-lg font-medium" : "400 text-base"}`}
              >
                {line || " "}
              </motion.p>
            ))}
          </div>

          {/* Continuation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="glass-strong rounded-3xl p-8 border border-white/8 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-16 flex-shrink-0 rounded-full bg-gradient-to-b from-brand-500 to-violet-400" />
              <p className="text-gray-300 leading-relaxed">
                I don&apos;t want to stop learning once I become comfortable with something. I want to keep challenging
                myself, building more complex applications, improving my skills, and discovering what I&apos;m capable
                of creating.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Statement section */}
      <section id="final" ref={finalRef} className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px divider-glow" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] orb orb-blue opacity-12" />
          <div className="absolute inset-0 grid-overlay opacity-15" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Final lines */}
          <div className="mb-10 space-y-3">
            {finalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={finalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span
                  className={`font-bold leading-tight ${
                    line.size === "large" ? "text-4xl sm:text-6xl md:text-7xl" : "text-2xl sm:text-3xl"
                  } ${line.highlight ? "gradient-text text-glow" : "text-white/50"}`}
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={finalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-500 text-base max-w-xl mx-auto mb-14 leading-relaxed"
          >
            Every line of code, every project, every mistake, and every new concept is another step forward.
          </motion.p>

          {/* LEARN. BUILD. IMPROVE. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={finalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
          >
            {["LEARN", "BUILD", "IMPROVE"].map((word, i) => (
              <span key={word} className="flex items-center gap-6 sm:gap-10">
                <span
                  className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-white/80"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {word}
                </span>
                {i < 2 && (
                  <span className="text-brand-500 text-xl" aria-hidden>·</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
