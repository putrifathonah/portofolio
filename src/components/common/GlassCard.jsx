import React from 'react';
import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', hoverEffect = true, onClick, ...props }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${hoverEffect ? 'hover:border-accent-purple/40 hover:shadow-xl hover:shadow-accent-purple/5' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
