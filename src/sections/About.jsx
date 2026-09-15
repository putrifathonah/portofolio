import React from 'react';
import { Download, User, Compass, Sparkles, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { MagneticButton } from '../components/common/MagneticButton';
import { Reveal } from '../components/common/Reveal';

export function About() {
  const infoCards = [
    { label: "NAME", value: "Putri Fathonah", icon: User, color: "text-accent-pink" },
    { label: "FOCUS", value: "Business Analysis & Product Development", icon: Compass, color: "text-accent-purple" },
    { label: "INTERESTS", value: "Digital Products & Technology", icon: Sparkles, color: "text-accent-blue" },
    { label: "BASED IN", value: "Indonesia", icon: MapPin, color: "text-emerald-400" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-[850px] mx-auto">
        {/* Section Heading - Centered */}
        <SectionHeading
          label="ABOUT ME"
          title="A LITTLE BIT ABOUT ME."
          align="center"
        />

        <div className="space-y-8 flex flex-col items-center text-center">
          {/* Tagline / Intro Badge */}
          <Reveal direction="up" delay={0.3} width="100%">
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-accent-purple/30 bg-gradient-to-r from-accent-pink/5 via-accent-purple/5 to-accent-blue/5 shadow-lg shadow-accent-purple/5 text-center">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent-pink mb-2">
                CAREER DIRECTION
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-light-text dark:text-dark-text leading-snug">
                Aspiring Business Analyst & Product Enthusiast <span className="text-accent-purple px-1">|</span> Bridging Business Needs with Tech Solutions
              </h3>
            </div>
          </Reveal>

          {/* Two-Paragraph Personal Copy - Centered & Width Constrained */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed sm:leading-loose text-light-muted dark:text-dark-muted font-normal text-center max-w-[800px] mx-auto">
            <Reveal direction="up" delay={0.4} width="100%">
              <p>
                An Information Systems student with a growing interest in Business Analysis and Product Development. Exploring how business needs, user problems, and technology can come together to create useful digital solutions. Working on different projects has helped me understand that building a product is not only about technology, but also about knowing the problem and the people behind it.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5} width="100%">
              <p>
                Every project is a chance to learn, try something different, and improve along the way. Different perspectives, feedback, and challenges are part of the process I enjoy. With a growth mindset, the goal is not to know everything from the start, but to keep learning and become better with every experience.
              </p>
            </Reveal>
          </div>

          {/* 4 Information Cards Grid */}
          <Reveal direction="up" delay={0.6} width="100%">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 w-full text-left">
              {infoCards.map((info, idx) => {
                const IconComp = info.icon;
                return (
                  <GlassCard
                    key={idx}
                    hoverEffect={true}
                    className="p-5 border border-dark-border/10 dark:border-dark-border/30 flex items-start gap-4"
                  >
                    <div className={`p-3 rounded-xl glass-panel ${info.color} shrink-0`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-0.5">
                        {info.label}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-light-text dark:text-dark-text leading-snug">
                        {info.value}
                      </span>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </Reveal>

          {/* Download CV Action */}
          <Reveal direction="up" delay={0.8}>
            <div className="pt-4 flex items-center justify-center">
              <MagneticButton
                variant="primary"
                href="/cv/PutriFathonah_CV.pdf"
                download="PutriFathonah_CV.pdf"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


