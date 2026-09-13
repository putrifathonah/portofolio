import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { ProjectModal } from '../components/projects/ProjectModal';
import { projectsData } from '../data/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="SELECTED WORK"
          title="BUILDING DIGITAL EXPERIENCES"
          subtitle="A collection of projects where I turn ideas, problems, and curiosity into digital experiences."
        />

        {/* Draggable Horizontal Gallery */}
        <ProjectGallery
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </div>

      {/* Animated Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
