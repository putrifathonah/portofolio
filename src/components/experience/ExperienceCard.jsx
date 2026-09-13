import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export function ExperienceCard({ experience, index }) {
  return (
    <GlassCard className="relative w-full p-6 sm:p-8 border border-dark-border/20 dark:border-dark-border/40 hover:border-accent-purple/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-purple uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4 text-accent-pink" />
            <span>{experience.company}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-light-text dark:text-dark-text">
            {experience.role}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-light-muted dark:text-dark-muted font-medium">
          <span className="flex items-center gap-1 glass-panel px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-accent-purple" />
            {experience.period}
          </span>
          <span className="flex items-center gap-1 glass-panel px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-accent-blue" />
            {experience.location}
          </span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Key Highlights */}
      {experience.highlights && (
        <div className="space-y-2 mb-6">
          {experience.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-light-text dark:text-dark-text">
              <CheckCircle className="w-4 h-4 text-accent-pink shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border/10 dark:border-dark-border/20">
        {experience.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
