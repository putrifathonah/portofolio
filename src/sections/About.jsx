import React from 'react';
import { Download, User, Briefcase, Target, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { MagneticButton } from '../components/common/MagneticButton';
import { Reveal } from '../components/common/Reveal';

export function About() {
  const infoCards = [
    { label: "NAME", value: "Putri Fathonah", icon: User, color: "text-accent-pink" },
    { label: "ROLE", value: "Student & Digital Product Developer", icon: Briefcase, color: "text-accent-purple" },
    { label: "FOCUS", value: "UI/UX & Web Development", icon: Target, color: "text-accent-blue" },
    { label: "LOCATION", value: "Indonesia", icon: MapPin, color: "text-emerald-400" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="ABOUT ME"
          title="A LITTLE BIT ABOUT ME."
          subtitle="Combining technology, design thinking, and curiosity to solve real-world problems."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="left" delay={0.2} width="100%">
              <GlassCard className="relative w-full max-w-md mx-auto p-4 sm:p-5 border border-dark-border/20 dark:border-dark-border/40">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-dark-bg/60">
                  <img
                    src="/assets/profile/profile-placeholder.jpg"
                    alt="Putri Fathonah About"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel text-white">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-accent-pink mb-1">
                      Information Systems Student
                    </span>
                    <h3 className="text-xl font-bold">Putri Fathonah</h3>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right Column: Bio Copy & Info Grid */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="right" delay={0.3} width="100%">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-light-muted dark:text-dark-muted font-normal">
                <p>
                  I'm an Information Systems student who enjoys turning ideas and real-world problems into digital experiences.
                </p>
                <p>
                  I'm interested in UI/UX, web development, software systems, and exploring how technology can make everyday processes simpler and more meaningful.
                </p>
                <p>
                  I enjoy learning by building — from digital products and management systems to creative experiments with technology.
                </p>
              </div>
            </Reveal>

            {/* Compact Info Cards Grid */}
            <Reveal direction="up" delay={0.4} width="100%">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {infoCards.map((info, idx) => {
                  const IconComp = info.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl glass-card border border-dark-border/10 dark:border-dark-border/20 flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl glass-panel ${info.color}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-light-muted dark:text-dark-muted">
                          {info.label}
                        </span>
                        <span className="font-semibold text-sm text-light-text dark:text-dark-text">
                          {info.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Download CV Action */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-2">
                <MagneticButton
                  variant="primary"
                  href="/assets/cv/cv-demo.pdf"
                  download="cv-demo.pdf"
                >
                  <span>DOWNLOAD CV</span>
                  <Download className="w-4 h-4" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
