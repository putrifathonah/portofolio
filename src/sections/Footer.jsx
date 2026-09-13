import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Reveal } from '../components/common/Reveal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative pt-20 pb-10 px-4 sm:px-6 overflow-hidden border-t border-dark-border/10 dark:border-dark-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Staggered Statement */}
        <div className="mb-16 text-center space-y-1">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-light-text/30 dark:text-dark-text/20 uppercase">
              LEARN.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2} width="100%">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gradient-purple uppercase">
              BUILD.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3} width="100%">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-light-text/30 dark:text-dark-text/20 uppercase">
              GROW.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4} width="100%">
            <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted font-mono tracking-wider mt-4">
              Curious about problems. Focused on better solutions.
            </p>
          </Reveal>
        </div>

        {/* Footer Identity & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-dark-border/10 dark:border-dark-border/20 text-center md:text-left">
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-gradient-purple block">
              PUTRI FATHONAH
            </span>
            <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted mt-1 max-w-md">
              Aspiring Business Analyst & Product Enthusiast | Bridging Business Needs with Tech Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-light-muted dark:text-dark-muted">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-accent-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/putrifathonah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/putrifathonah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/puonaav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:putrifathonah004@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Back To Top Action (No Copyright Line) */}
        <div className="pt-6 flex justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-pink transition-colors font-semibold uppercase tracking-wider text-[11px] cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
