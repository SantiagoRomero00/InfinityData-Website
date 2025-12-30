import React, { useState, useEffect } from 'react';
import { Infinity } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Detect current section based on scroll position
      const heroSection = document.querySelector('section');
      const servicesSection = document.querySelector('#servicios');
      const howItWorksSection = document.querySelector('#como-funciona');
      
      if (heroSection && servicesSection && howItWorksSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const servicesBottom = servicesSection.offsetTop + servicesSection.offsetHeight;
        const howItWorksTop = howItWorksSection.offsetTop;
        
        if (scrollPosition < heroBottom - 100) {
          setCurrentSection('hero');
        } else if (scrollPosition < servicesBottom - 100) {
          setCurrentSection('services');
        } else if (scrollPosition >= howItWorksTop - 100) {
          setCurrentSection('dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles based on current section
  const getHeaderStyles = () => {
    switch (currentSection) {
      case 'hero':
        return {
          bg: 'bg-white/20',
          border: 'border-white/20',
          text: 'text-white/80',
          textHover: 'hover:text-white',
          logo: 'text-white'
        };
      case 'services':
        return {
          bg: 'bg-white/95',
          border: 'border-gray-200/50',
          text: 'text-gray-700/80',
          textHover: 'hover:text-gray-900',
          logo: 'text-gray-900'
        };
      case 'dark':
        return {
          bg: 'bg-black/80',
          border: 'border-white/20',
          text: 'text-white/80',
          textHover: 'hover:text-white',
          logo: 'text-white'
        };
      default:
        return {
          bg: 'bg-white/20',
          border: 'border-white/20',
          text: 'text-white/80',
          textHover: 'hover:text-white',
          logo: 'text-white'
        };
    }
  };

  const styles = getHeaderStyles();

  return (
    <header className={`${styles.bg} backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b ${styles.border} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Infinity className="w-8 h-8 text-emerald-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
            </div>
            <span className={`text-xl font-bold ${styles.logo} transition-colors duration-300`}>Infinity Data</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              Servicios
            </a>
            <a href="#como-funciona" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              ¿Cómo trabajamos?
            </a>
            <a href="/nosotros" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              Nosotros
            </a>
          </nav>

          {/* CTA Button */}
          <a href="/demo" className="bg-gradient-to-r from-emerald-400 to-emerald-200 hover:from-emerald-500 hover:to-emerald-300 text-white px-6 py-2.5 rounded-full font-semibold text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Reservar Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;