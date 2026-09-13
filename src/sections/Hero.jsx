import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Code, Layout, Lightbulb } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';
import { useMousePosition } from '../hooks/useMousePosition';

export function Hero() {
  const { normalizedX, normalizedY } = useMousePosition();

  // Subtle floating glass badges around profile image
  const badges = [
    { label: "UI/UX", icon: Layout, color: "text-accent-pink", top: "12%", left: "-8%", speed: 0.8 },
    { label: "DEVELOPER", icon: Code, color: "text-accent-purple", top: "45%", right: "-12%", speed: 1.2 },
    { label: "PROBLEM SOLVER", icon: Lightbulb, color: "text-accent-blue", bottom: "15%", left: "-6%", speed: 1.0 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-pink/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-accent-purple glass-panel mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-pink animate-spin" style={{ animationDuration: '8s' }} />
            <span>HELLO, I'M PUTRI</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-light-text dark:text-dark-text mb-6"
          >
            BUILDING DIGITAL{' '}
            <span className="text-gradient-purple block sm:inline">EXPERIENCES</span>{' '}
            WITH CODE & CREATIVITY.
          </motion.h1>

          {/* Supporting Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-light-muted dark:text-dark-muted font-normal max-w-xl leading-relaxed mb-8"
          >
            Information Systems student passionate about technology, digital products, UI/UX, and building meaningful experiences through code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              variant="primary"
              href="#projects"
              data-cursor="EXPLORE"
              data-cursor-variant="hover"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              href="#about"
            >
              ABOUT ME
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Parallax Floating Profile Image & Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative w-72 h-88 sm:w-80 sm:h-96"
          >
            {/* Parallax Outer Container reacting to mouse */}
            <motion.div
              animate={{
                x: normalizedX * 15,
                y: normalizedY * 15,
                rotate: normalizedX * 2
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="relative w-full h-full rounded-3xl p-3 glass-card shadow-2xl shadow-accent-purple/20 animate-float"
            >
              {/* Profile Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative group bg-dark-bg/60">
                <img
                  src="/assets/profile/profile-placeholder.jpg"
                  alt="Putri Fathonah"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel text-white text-xs font-semibold flex items-center justify-between">
                  <span>Putri Fathonah</span>
                  <span className="text-[10px] text-accent-pink uppercase tracking-widest font-mono">2026</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Badges */}
            {badges.map((badge, index) => {
              const IconComp = badge.icon;
              return (
                <motion.div
                  key={index}
                  style={{ top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right }}
                  animate={{
                    x: normalizedX * 25 * badge.speed,
                    y: normalizedY * 25 * badge.speed + (index % 2 === 0 ? 6 : -6),
                  }}
                  transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                  className="absolute z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel shadow-lg border border-white/20 select-none animate-float"
                >
                  <IconComp className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-xs font-bold tracking-wider text-light-text dark:text-dark-text">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-light-muted dark:text-dark-muted hover:text-accent-purple transition-colors cursor-pointer group"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-accent-purple animate-bounce" />
      </motion.a>
    </section>
  );
}
