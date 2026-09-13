import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

export function Navbar({ activeSection, isScrolled, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4 sm:p-6 transition-all duration-300 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 py-3 rounded-full transition-all duration-300 glass-panel shadow-lg ${
            isScrolled ? 'shadow-accent-purple/10 border-accent-purple/30 scale-95 sm:scale-100' : 'w-full max-w-6xl'
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-extrabold text-lg sm:text-xl tracking-wider text-light-text dark:text-dark-text group"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-pink via-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-xs shadow-md shadow-accent-purple/30 group-hover:scale-110 transition-transform duration-300">
              PF
            </span>
            <span className="hidden sm:inline font-bold tracking-tight text-gradient-purple">
              PUTRI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-light-bg/50 dark:bg-dark-bg/40 p-1.5 rounded-full border border-dark-border/10 dark:border-dark-border/30">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full shadow-md shadow-accent-purple/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Controls: Theme Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-purple transition-colors md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
}
