import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export function ExperienceItem({ experience }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <GlassCard
      hoverEffect={true}
      className="w-full p-0 overflow-hidden border border-dark-border/20 dark:border-dark-border/40 hover:border-accent-purple/50 transition-all duration-300 shadow-lg shadow-accent-purple/5"
    >
      {/* Accordion Header Action Button */}
      <button
        type="button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`exp-details-${experience.id}`}
        className="w-full p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left focus:outline-none focus:ring-2 focus:ring-accent-purple/50 rounded-2xl cursor-pointer group"
      >
        {/* Left Side: Logo & Meta Info */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          {/* Company Logo Container */}
          <div className="p-2.5 rounded-2xl glass-panel bg-white/90 dark:bg-white/10 border border-dark-border/10 dark:border-white/20 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>

          <div>
            <h3 className="font-extrabold text-lg sm:text-xl text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors leading-snug mb-1">
              {experience.company}
            </h3>

            <p className="text-sm sm:text-base font-bold text-light-text/80 dark:text-dark-text/80 mb-2">
              {experience.role}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-light-muted dark:text-dark-muted font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                {experience.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                {experience.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Expand Dropdown Chevron Button */}
        <div className="flex items-center justify-end sm:justify-center">
          <div className={`p-3 rounded-full glass-panel transition-all duration-300 ${isOpen ? 'bg-accent-purple text-white shadow-md shadow-accent-purple/30' : 'text-light-muted dark:text-dark-muted group-hover:text-accent-purple'}`}>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Collapsible Details Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`exp-details-${experience.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden border-t border-dark-border/10 dark:border-dark-border/20 bg-light-bg/40 dark:bg-dark-bg/40"
          >
            <div className="p-6 sm:p-8 space-y-6">
              {/* Subsection: EXPERIENCE Description */}
              <div>
                <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent-purple mb-3">
                  EXPERIENCE
                </span>
                <div className="space-y-3">
                  {experience.descriptions.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0 mt-1" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subsection: TECHNOLOGIES */}
              <div>
                <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent-blue mb-3">
                  TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-purple/15 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
