import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Reveal } from '../components/common/Reveal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-20 pb-10 px-4 sm:px-6 overflow-hidden border-t border-dark-border/10 dark:border-dark-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Large Typography Statement */}
        <div className="mb-20 space-y-2 text-center">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-text/30 dark:text-dark-text/20 uppercase">
              KEEP BUILDING.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2} width="100%">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient-purple uppercase">
              KEEP LEARNING.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3} width="100%">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-text/30 dark:text-dark-text/20 uppercase">
              KEEP EXPLORING.
            </h2>
          </Reveal>
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-dark-border/10 dark:border-dark-border/20">
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-gradient-purple">
              PUTRI FATHONAH
            </span>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
              Information Systems Student & Digital Product Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
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
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/putrifathonah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/putrifathonah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:putrifathonah.dev@gmail.com"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Rights & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-muted dark:text-dark-muted font-medium">
          <p>© 2026 Putri Fathonah. Designed & built with curiosity.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-pink transition-colors font-semibold uppercase tracking-wider text-[11px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
