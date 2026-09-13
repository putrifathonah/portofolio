import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ExperienceItem } from '../components/experience/ExperienceItem';
import { experiencesData } from '../data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-light-bg/50 dark:bg-dark-bg/50 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeading
          label="EXPERIENCE"
          title="MY JOURNEY THROUGH WORK & LEADERSHIP"
          align="center"
        />

        {/* Subtle Vertical Timeline Track & Staggered Items */}
        <div className="relative mt-12 pl-6 sm:pl-8">
          {/* Minimal Vertical Timeline Line */}
          <div className="absolute top-6 bottom-6 left-2.5 sm:left-3.5 w-0.5 bg-gradient-to-b from-accent-pink via-accent-purple to-accent-blue opacity-30" />

          <div className="space-y-8 sm:space-y-10">
            {experiencesData.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot Accent Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="absolute -left-[31px] sm:-left-[35px] top-7 w-5 h-5 rounded-full bg-dark-bg border-2 border-accent-purple flex items-center justify-center z-10 shadow-md shadow-accent-purple/20 group-hover:scale-125 transition-transform"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
                </motion.div>

                {/* Staggered Entrance Animation for Experience Item */}
                <Reveal direction="up" delay={0.2 + index * 0.15} width="100%">
                  <ExperienceItem experience={exp} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
