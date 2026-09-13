import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';

export function App() {
  const [theme, setTheme] = useState('dark');
  const { scrollProgress, activeSection, isScrolled } = useScrollProgress();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text bg-grain selection:bg-accent-purple/30 selection:text-accent-purple">
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Floating Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  );
}

export default App;

