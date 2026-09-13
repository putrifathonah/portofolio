import React from 'react';
import { TechnologyCard } from './TechnologyCard';

export function TechnologyMarquee({ technologies }) {
  const { row1, row2 } = technologies;

  // Duplicate items for seamless 100% infinite marquee loops
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <div className="relative w-full overflow-hidden space-y-6 py-4">
      {/* Subtle fade masks on left and right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftward Marquee */}
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] shrink-0">
          {marqueeRow1.map((item, index) => (
            <TechnologyCard key={`r1-${index}`} tech={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Marquee */}
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused] shrink-0">
          {marqueeRow2.map((item, index) => (
            <TechnologyCard key={`r2-${index}`} tech={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
