import React from 'react';
import * as Icons from 'lucide-react';

export function TechnologyItem({ item }) {
  // Dynamically resolve icon from Lucide React
  const IconComponent = Icons[item.icon] || Icons.Code;

  return (
    <div
      className={`group flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-card border border-dark-border/10 dark:border-dark-border/30 hover:border-accent-purple/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/20 shrink-0 select-none cursor-pointer ${
        item.isSkill
          ? 'bg-gradient-to-r from-accent-pink/5 via-accent-purple/5 to-accent-blue/5'
          : ''
      }`}
    >
      <div
        className="p-1.5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 shrink-0"
        style={{ backgroundColor: `${item.color}18`, color: item.color }}
      >
        <IconComponent className="w-4 h-4" />
      </div>
      <span className="font-semibold text-xs sm:text-sm text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}
