import React from 'react';
import { Reveal } from './Reveal';

export function SectionHeading({ label, title, subtitle, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignment} ${className}`}>
      {label && (
        <Reveal direction="up" delay={0.1}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-accent-purple glass-panel mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse" />
            {label}
          </span>
        </Reveal>
      )}

      {title && (
        <Reveal direction="up" delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text max-w-3xl leading-tight">
            {title}
          </h2>
        </Reveal>
      )}

      {subtitle && (
        <Reveal direction="up" delay={0.3}>
          <p className="mt-4 text-base sm:text-lg text-light-muted dark:text-dark-muted max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
