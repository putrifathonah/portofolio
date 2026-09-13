import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { Reveal } from '../common/Reveal';

export function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8">
      {/* Animated Vertical Growing Line */}
      <div className="absolute top-0 bottom-0 left-2.5 sm:left-3.5 w-0.5 bg-gradient-to-b from-accent-pink via-accent-purple to-accent-blue opacity-40" />

      <div className="space-y-12 sm:space-y-16">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="absolute -left-[31px] sm:-left-[35px] top-6 w-5 h-5 rounded-full bg-dark-bg border-2 border-accent-purple flex items-center justify-center z-10 shadow-lg shadow-accent-purple/30 group-hover:scale-125 transition-transform"
            >
              <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
            </motion.div>

            {/* Experience Card */}
            <Reveal direction="up" delay={index * 0.15}>
              <ExperienceCard experience={exp} index={index} />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
