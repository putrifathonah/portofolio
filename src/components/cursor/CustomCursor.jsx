import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      setIsVisible(true);
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || '';
        const variant = target.getAttribute('data-cursor-variant') || 'hover';
        setCursorText(text);
        setCursorVariant(variant);
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.body.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.body.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isMobile]);

  if (isMobile || !isVisible || x < 0 || y < 0) return null;

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: x - 16,
      y: y - 16,
      backgroundColor: 'rgba(167, 139, 250, 0.15)',
      borderColor: 'rgba(167, 139, 250, 0.4)',
      borderWidth: 1.5,
      mixBlendMode: 'normal'
    },
    hover: {
      height: 72,
      width: 72,
      x: x - 36,
      y: y - 36,
      backgroundColor: 'rgba(244, 114, 182, 0.85)',
      borderColor: 'rgba(255, 255, 255, 0.6)',
      borderWidth: 1,
      mixBlendMode: 'normal'
    },
    button: {
      height: 48,
      width: 48,
      x: x - 24,
      y: y - 24,
      backgroundColor: 'rgba(59, 130, 246, 0.75)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 1.5,
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      {/* Small Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-pink z-50 pointer-events-none"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.01 }}
      />

      {/* Outer Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full z-50 pointer-events-none flex items-center justify-center text-white font-bold text-[10px] tracking-widest shadow-lg shadow-accent-purple/20 backdrop-blur-xs"
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.1 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="uppercase select-none drop-shadow-sm font-extrabold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
