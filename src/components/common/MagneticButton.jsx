import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ children, className = '', onClick, href, download, variant = 'primary', ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 px-8 py-3.5 text-sm tracking-wide font-semibold",
    secondary: "glass-card text-light-text dark:text-dark-text border border-dark-border/20 dark:border-dark-border hover:border-accent-purple/50 px-7 py-3 text-sm font-medium",
    outline: "border border-accent-purple/40 text-accent-purple hover:bg-accent-purple/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      )}
    </Component>
  );
}
