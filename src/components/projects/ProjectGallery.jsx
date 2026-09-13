import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export function ProjectGallery({ projects }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setCurrentIndex(1);
      return;
    }

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

  // Mouse Wheel horizontal scroll & event setup
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('wheel', handleWheel);
    };
  }, [projects]);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Controls & Counter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-light-muted dark:text-dark-muted font-mono glass-panel px-4 py-2 rounded-full">
          <MoveHorizontal className="w-4 h-4 text-accent-purple animate-pulse" />
          <span>DRAG OR SCROLL TO EXPLORE</span>
        </div>

        {/* Counter & Arrow Buttons */}
        <div className="flex items-center gap-6">
          {/* Format: 01 / 03 */}
          <div className="font-mono text-sm sm:text-base font-bold tracking-wider text-light-text dark:text-dark-text">
            <span className="text-accent-purple">0{currentIndex}</span>
            <span className="text-light-muted dark:text-dark-muted px-1.5">/</span>
            <span className="text-light-muted dark:text-dark-muted">0{projects.length}</span>
          </div>

          {/* Previous / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Previous project"
              className="p-3 rounded-full glass-panel hover:bg-accent-purple hover:text-white transition-colors text-light-text dark:text-dark-text cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Next project"
              className="p-3 rounded-full glass-panel hover:bg-accent-purple hover:text-white transition-colors text-light-text dark:text-dark-text cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className={`flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-4 px-2 sm:px-4 ${
          isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        } snap-x snap-mandatory`}
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-start shrink-0 flex-none">
            <ProjectCard project={project} />
          </div>
        ))}
        {/* Spacer to prevent right clipping */}
        <div className="w-4 sm:w-8 shrink-0 flex-none" aria-hidden="true" />
      </div>
    </div>
  );
}
