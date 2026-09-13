import React from 'react';
import { TechnologyItem } from './TechnologyItem';

export function TechnologyMarqueeRow({ items, animationClass = 'animate-marquee-row1' }) {
  return (
    <div className="marquee-group relative flex w-full overflow-hidden select-none py-1.5">
      {/* Primary Track */}
      <div className={`marquee-track flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 ${animationClass}`}>
        {items.map((item, index) => (
          <TechnologyItem key={`t1-${item.name}-${index}`} item={item} />
        ))}
      </div>

      {/* Duplicate Track (for 100% seamless infinite loop without jump or truncation) */}
      <div aria-hidden="true" className={`marquee-track flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 ${animationClass}`}>
        {items.map((item, index) => (
          <TechnologyItem key={`t2-${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
