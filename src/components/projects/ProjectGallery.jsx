import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export function ProjectGallery({ projects, onSelectProject }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Calculate current item index
    const total = projects.length;
    const calculatedIndex = Math.min(
      total,
      Math.max(1, Math.round((scrollLeft / maxScroll) * (total - 1)) + 1)
    );
    setCurrentIndex(calculatedIndex);
  };

  const scrollBy = (offset) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [projects]);

  return (
    <div className="relative w-full">
      {/* Top Gallery Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-light-muted dark:text-dark-muted font-medium glass-panel px-4 py-2 rounded-full">
          <MoveHorizontal className="w-4 h-4 text-accent-purple animate-pulse" />
          <span>DRAG OR SCROLL TO EXPLORE</span>
        </div>

        {/* Indicator + Navigation Buttons */}
        <div className="flex items-center gap-6">
          {/* Numeric Indicator */}
          <div className="flex items-center gap-3 font-mono text-sm font-semibold text-light-text dark:text-dark-text">
            <span className="text-accent-purple">0{currentIndex}</span>
            <div className="w-24 sm:w-32 h-1.5 rounded-full bg-dark-border/20 dark:bg-dark-border overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue rounded-full"
                animate={{ width: `${Math.max(10, scrollProgress)}%` }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              />
            </div>
            <span className="text-light-muted dark:text-dark-muted">0{projects.length}</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-420)}
              aria-label="Previous project"
              className="p-3 rounded-full glass-panel hover:bg-accent-purple hover:text-white transition-colors text-light-text dark:text-dark-text"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(420)}
              aria-label="Next project"
              className="p-3 rounded-full glass-panel hover:bg-accent-purple hover:text-white transition-colors text-light-text dark:text-dark-text"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Draggable / Scrollable Track */}
      <div
        ref={containerRef}
        data-cursor="DRAG"
        data-cursor-variant="button"
        className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4 px-2 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-start shrink-0">
            <ProjectCard project={project} onClick={() => onSelectProject(project)} />
          </div>
        ))}
      </div>
    </div>
  );
}
