import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar, UserCheck, Code2 } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-light-bg/95 dark:bg-dark-bg/95 border border-dark-border/20 dark:border-dark-border p-6 sm:p-10 shadow-2xl shadow-accent-purple/20 no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-6 right-6 p-3 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-pink transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-[260px] sm:h-[380px] rounded-2xl overflow-hidden mb-8 bg-dark-bg/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-panel bg-black/50 border-white/20 mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {project.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-panel bg-black/50 text-white hover:text-accent-purple transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <MagneticButton
                    variant="primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs"
                  >
                    Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl glass-card mb-8 border border-dark-border/10 dark:border-dark-border/20 text-xs">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-accent-pink shrink-0" />
              <div>
                <span className="block text-light-muted dark:text-dark-muted font-medium">Year</span>
                <span className="font-semibold text-light-text dark:text-dark-text">{project.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-accent-purple shrink-0" />
              <div>
                <span className="block text-light-muted dark:text-dark-muted font-medium">Role</span>
                <span className="font-semibold text-light-text dark:text-dark-text">{project.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Code2 className="w-4 h-4 text-accent-blue shrink-0" />
              <div>
                <span className="block text-light-muted dark:text-dark-muted font-medium">Domain</span>
                <span className="font-semibold text-light-text dark:text-dark-text">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8 text-light-text dark:text-dark-text">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-gradient-purple mb-2">Project Overview</h3>
              <p className="text-sm sm:text-base leading-relaxed text-light-muted dark:text-dark-muted">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl glass-card border border-rose-500/20 bg-rose-500/5">
                <h4 className="text-sm font-bold text-rose-500 mb-2">The Challenge</h4>
                <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 bg-emerald-500/5">
                <h4 className="text-sm font-bold text-emerald-500 mb-2">The Solution</h4>
                <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div>
                <h3 className="text-lg font-bold text-gradient-purple mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl glass-card border border-dark-border/10">
                      <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-light-text dark:text-dark-text font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-lg font-bold text-gradient-purple mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-accent-purple/15 text-accent-purple border border-accent-purple/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
