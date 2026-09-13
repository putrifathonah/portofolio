import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Layers } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export function ProjectCard({ project, onClick }) {
  return (
    <GlassCard
      onClick={onClick}
      data-cursor="VIEW"
      data-cursor-variant="hover"
      className="group relative flex flex-col justify-between w-[320px] sm:w-[400px] h-[480px] shrink-0 overflow-hidden cursor-pointer border border-dark-border/20 dark:border-dark-border/40 hover:border-accent-purple/60"
    >
      {/* Image Container with Zoom hover */}
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-5 bg-dark-bg/60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white glass-panel bg-black/40 border-white/20">
          {project.category}
        </span>

        {/* Year Pill */}
        <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/90 glass-panel bg-black/40 border-white/20">
          <Calendar className="w-3 h-3 text-accent-pink" />
          {project.year}
        </span>
      </div>

      {/* Title & Description */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors duration-300">
              {project.title}
            </h3>
            <span className="p-2 rounded-full glass-panel group-hover:bg-accent-purple group-hover:text-white transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Technology tags */}
        <div className="pt-3 border-t border-dark-border/10 dark:border-dark-border/20">
          <div className="flex items-center gap-1.5 text-xs text-light-muted dark:text-dark-muted mb-2">
            <Layers className="w-3.5 h-3.5 text-accent-purple" />
            <span className="font-semibold text-[11px] uppercase tracking-wider">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] text-light-muted dark:text-dark-muted font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
