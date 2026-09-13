import React from 'react';
import * as Icons from 'lucide-react';

export function TechnologyCard({ tech }) {
  // Dynamically resolve icon from Lucide React
  const IconComponent = Icons[tech.icon] || Icons.Code;

  return (
    <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-dark-border/10 dark:border-dark-border/30 hover:border-accent-purple/50 transition-all duration-300 hover:scale-105 shrink-0 select-none">
      <div
        className="p-2.5 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6"
        style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
      >
        <IconComponent className="w-5 h-5" />
      </div>
      <span className="font-semibold text-sm text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors">
        {tech.name}
      </span>
    </div>
  );
}
