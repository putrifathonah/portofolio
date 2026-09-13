import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { TechnologyMarqueeRow } from '../components/technologies/TechnologyMarqueeRow';
import { technologiesData } from '../data/technologies.data';

export function Skills() {
  const { row1, row2, row3, row4 } = technologiesData;

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-light-bg/50 dark:bg-dark-bg/50">
      {/* Soft Ambient Background Light Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

      {/* Fade masks on left & right edges to soften marquee edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <SectionHeading
          label="TECHNOLOGIES & TOOLS"
          title="TECHNOLOGIES I USE"
          subtitle="Tools and technologies I use to explore ideas, build products, and turn problems into digital solutions."
          align="center"
        />

        {/* 4 Sequential Marquee Rows */}
        <div className="space-y-4 sm:space-y-6 mt-12 w-full overflow-hidden">
          {/* Row 1: Move LEFT -> RIGHT */}
          <Reveal direction="up" delay={0.2} width="100%">
            <TechnologyMarqueeRow items={row1} animationClass="animate-marquee-row1" />
          </Reveal>

          {/* Row 2: Move RIGHT -> LEFT */}
          <Reveal direction="up" delay={0.3} width="100%">
            <TechnologyMarqueeRow items={row2} animationClass="animate-marquee-row2" />
          </Reveal>

          {/* Row 3: Move LEFT -> RIGHT */}
          <Reveal direction="up" delay={0.4} width="100%">
            <TechnologyMarqueeRow items={row3} animationClass="animate-marquee-row3" />
          </Reveal>

          {/* Row 4: Move RIGHT -> LEFT (Product & Design Methodologies) */}
          <Reveal direction="up" delay={0.5} width="100%">
            <TechnologyMarqueeRow items={row4} animationClass="animate-marquee-row4" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
