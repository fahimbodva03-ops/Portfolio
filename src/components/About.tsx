"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Foundation", value: "HTML & CSS", sub: "Core skills" },
  { label: "Currently Learning", value: "JavaScript", sub: "& More" },
  { label: "Focus", value: "Full-Stack", sub: "Development" },
  { label: "Mindset", value: "Always", sub: "Learning" },
];

const highlights = [
  { icon: "⚡", title: "Fast Learner", desc: "Continuously expanding knowledge across web technologies." },
  { icon: "🎯", title: "Goal Driven", desc: "Focused on becoming a skilled Full-Stack Web Developer." },
  { icon: "🔧", title: "Builder", desc: "Passionate about turning concepts into real applications." },
  { icon: "🌐", title: "Full-Stack Vision", desc: "Learning both frontend and backend to build complete solutions." },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="glass rounded-2xl p-5 card-hover border border-white/5 group"
    >
      <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mb-1">{stat.label}</div>
      <div className="text-xl font-bold gradient-text-warm" style={{ fontFamily: "var(--font-space)" }}>
        {stat.value}
      </div>
      <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
    </motion.div>
  );
}

function HighlightCard({ item, index }: { item: typeof highlights[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-5 border border-white/5 hover:border-brand-500/25 transition-colors group"
    >
      <div className="text-2xl mb-3">{item.icon}</div>
      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] orb orb-blue opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb orb-violet opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
            <span className="section-label">About Me</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            More Than Code.{" "}
            <span className="gradient-text">A Continuous</span>
            <br />
            Journey of Learning.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-brand-500 to-transparent mt-6"
          />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            {[
              {
                delay: 0.2,
                text: `Hello, I'm Fahim Bodva, an aspiring Full-Stack Web Developer with a strong interest in technology, web development, problem-solving, and creating meaningful digital experiences.`,
              },
              {
                delay: 0.3,
                text: `I'm fascinated by the way technology can transform simple ideas into powerful, interactive, and useful products. My journey began with learning the fundamentals of HTML and CSS, where I discovered my passion for designing and building websites from the ground up.`,
              },
              {
                delay: 0.4,
                text: `Since then, I have been continuously expanding my knowledge and exploring the different layers of modern web development — from creating clean user interfaces to understanding how servers, databases, and APIs power applications behind the scenes.`,
              },
              {
                delay: 0.5,
                text: `Today, my focus is on growing into a well-rounded Full-Stack Developer who can understand and work across both the frontend and backend of an application.`,
              },
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: para.delay, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="text-gray-400 leading-relaxed text-[15px]"
              >
                {para.text}
              </motion.p>
            ))}

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="border-l-2 border-brand-500/60 pl-5 py-1"
            >
              <p className="text-white/70 italic text-sm leading-relaxed">
                "I believe programming becomes truly meaningful when knowledge is transformed into practical experience."
              </p>
            </motion.blockquote>
          </div>

          {/* Right: Visuals */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <HighlightCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Beyond code strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong rounded-3xl p-8 border border-white/8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/40 via-transparent to-violet-950/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-brand-500/30">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-space)" }}>
                Beyond the Code
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                For me, becoming a developer is about developing a mindset that allows me to{" "}
                <span className="text-white/80">think logically, solve problems, communicate ideas, understand users, and build useful products</span>.
                This broader perspective is what motivates me to explore Full-Stack Development.
              </p>
            </div>
            <div className="flex-shrink-0 md:ml-auto">
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm font-semibold"
              >
                <span className="relative z-10">View Skills</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
