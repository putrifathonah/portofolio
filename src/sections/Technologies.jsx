import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TechnologyMarquee } from '../components/technologies/TechnologyMarquee';
import { technologiesData } from '../data/technologies';

export function Technologies() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10">
        <SectionHeading
          label="TECHNOLOGIES"
          title="TECHNOLOGIES I USE."
          subtitle="Some of the tools and technologies I use to turn ideas into real products."
        />
      </div>

      <TechnologyMarquee technologies={technologiesData} />
    </section>
  );
}
