import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ExperienceItem } from '../components/experience/ExperienceItem';
import { experiencesData } from '../data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <SectionHeading
          label="EXPERIENCE"
          title="MY JOURNEY THROUGH WORK & LEADERSHIP"
          align="center"
        />

        {/* Single Experience Accordion Item */}
        <div className="mt-8">
          <Reveal direction="up" delay={0.3} width="100%">
            <ExperienceItem experience={experiencesData[0]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
