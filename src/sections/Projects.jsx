import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { projectsData } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="SELECTED WORK"
          title="BUILDING DIGITAL EXPERIENCES"
          subtitle="A few things I've built while learning, exploring, and solving real problems with technology."
          align="center"
        />

        {/* Horizontal Project Carousel */}
        <div className="mt-8">
          <ProjectGallery projects={projectsData} />
        </div>
      </div>
    </section>
  );
}
