import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function MobileMenu({ isOpen, onClose, navItems, activeSection, theme, toggleTheme }) {
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    open: {
      opacity: 1,
      clipPath: "circle(140% at calc(100% - 40px) 40px)",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.08 + 0.15, duration: 0.35, ease: 'easeOut' }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-2xl md:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-xl tracking-tight text-gradient-purple">
              PUTRI.
            </span>
            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={onClose}
                aria-label="Close mobile menu"
                className="p-2.5 rounded-full glass-panel text-light-text dark:text-dark-text hover:text-accent-pink transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 my-auto">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className={`group flex items-center justify-between text-3xl font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? 'text-accent-purple'
                      : 'text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 ${isActive ? 'opacity-100 text-accent-pink' : 'opacity-0 group-hover:opacity-100'}`} />
                </motion.a>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-dark-border/10 dark:border-dark-border/20 text-xs text-light-muted dark:text-dark-muted flex justify-between items-center">
            <span>© 2026 Putri Fathonah</span>
            <span className="text-accent-purple font-medium">Digital Product Dev</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
