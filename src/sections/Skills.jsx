import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Reveal } from '../components/common/Reveal';
import { skillsData } from '../data/skills';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="SKILLS"
          title="TOOLS, SKILLS & THINGS I LOVE BUILDING."
          subtitle="A breakdown of my technical capabilities, software stack, design tools, and engineering workflows."
        />

        {/* Category Filters */}
        <Reveal direction="up" delay={0.2} width="100%" className="mb-10">
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-accent-pink to-accent-purple text-white shadow-md shadow-accent-purple/20'
                    : 'glass-panel text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Cards Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map((group, groupIdx) => {
            const GroupIcon = Icons[group.icon] || Icons.Code2;
            return (
              <div key={groupIdx} className="space-y-6">
                <Reveal direction="up" delay={0.1}>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl glass-panel text-accent-purple">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                        {group.category}
                      </h3>
                      <p className="text-xs text-light-muted dark:text-dark-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill, skillIdx) => (
                    <Reveal key={skillIdx} direction="up" delay={skillIdx * 0.08} width="100%">
                      <GlassCard className="group relative p-5 h-full border border-dark-border/10 dark:border-dark-border/30 hover:border-accent-purple/50">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-bold text-base text-light-text dark:text-dark-text group-hover:text-accent-purple transition-colors">
                            {skill.name}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                          {skill.desc}
                        </p>

                        <div className="mt-4 pt-3 border-t border-dark-border/10 dark:border-dark-border/20 flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>INTERACTIVE</span>
                          <span>✦</span>
                        </div>
                      </GlassCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
