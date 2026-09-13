import React from 'react';
import { Layers } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export function ProjectCard({ project }) {
  return (
    <GlassCard
      className="group relative flex flex-col justify-between w-[300px] sm:w-[380px] h-[430px] shrink-0 overflow-hidden border border-dark-border/20 dark:border-dark-border/40 hover:border-accent-purple/60 shadow-lg shadow-accent-purple/5 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-4 bg-dark-bg/60 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white glass-panel bg-black/50 border-white/20">
          {project.category}
        </span>
      </div>

      {/* Card Content: Title + Logo, Description, Tech Stack */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Logo + Project Title */}
          <div className="flex items-center gap-2.5 mb-2">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="h-6 sm:h-7 w-auto object-contain shrink-0"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-extrabold text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted line-clamp-3 leading-relaxed mb-4 font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Stack (Final Element in Card) */}
        <div className="pt-3 border-t border-dark-border/10 dark:border-dark-border/20">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
            <Layers className="w-3.5 h-3.5 text-accent-purple" />
            <span>TECH STACK</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] text-light-muted dark:text-dark-muted font-medium">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
