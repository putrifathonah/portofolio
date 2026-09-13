import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { experiencesData } from '../data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="EXPERIENCE"
          title="MY JOURNEY THROUGH WORK & LEADERSHIP"
          subtitle="Key milestones, internship roles, system development initiatives, and professional contributions."
        />

        <ExperienceTimeline experiences={experiencesData} />
      </div>
    </section>
  );
}
