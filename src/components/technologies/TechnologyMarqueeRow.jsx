import React from 'react';
import { TechnologyItem } from './TechnologyItem';

export function TechnologyMarqueeRow({ items, animationClass = 'animate-marquee-left' }) {
  // Duplicate array 3 times for seamless infinite 100% marquee loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden py-1">
      <div className={`flex gap-3 sm:gap-4 ${animationClass} hover:[animation-play-state:paused] shrink-0`}>
        {marqueeItems.map((item, index) => (
          <TechnologyItem key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
