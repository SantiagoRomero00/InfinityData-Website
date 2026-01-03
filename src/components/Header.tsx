import React, { useState, useEffect } from 'react';
import { Infinity, Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitch from './LanguageSwitch';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="grid grid-cols-3 xl:flex items-center xl:justify-between">
          {/* Mobile Menu Button - Left on Mobile */}
          <div className="flex items-center justify-start xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${styles.logo}`} />
              ) : (
                <Menu className={`w-6 h-6 ${styles.logo}`} />
              )}
            </button>
          </div>

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <div className="flex items-center space-x-2 justify-center xl:justify-start">
            <div className="relative">
              <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
            </div>
            <span className={`text-base sm:text-xl font-bold ${styles.logo} transition-colors duration-300 whitespace-nowrap`}>Infinity Data</span>
          </div>

          {/* Language Switcher - Right on Mobile, Hidden on Desktop (shown via fixed positioning) */}
          <div className="flex items-center justify-end xl:hidden">
            <LanguageSwitch textColor={styles.text} hoverColor={styles.textHover} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8 shrink-0">
            <a href="#servicios" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              {t('header.nav.services')}
            </a>
            <a href="#como-funciona" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              {t('header.nav.howWeWork')}
            </a>
            <a href="/nosotros" className={`${styles.text} ${styles.textHover} transition-colors font-medium duration-300`}>
              {t('header.nav.about')}
            </a>
          </nav>

          {/* CTA Button - Desktop Only */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <a href="/demo" className="shrink-0 bg-gradient-to-r from-emerald-400 to-emerald-200 hover:from-emerald-500 hover:to-emerald-300 text-white px-6 py-2.5 rounded-full font-semibold text-[17px] transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('header.ctaButton')}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-200/50">
          <nav className="px-4 py-4 space-y-3 bg-white/95 backdrop-blur-md">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              {t('header.nav.services')}
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              {t('header.nav.howWeWork')}
            </a>
            <a
              href="/nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              {t('header.nav.about')}
            </a>
            <a
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-emerald-400 to-emerald-200 hover:from-emerald-500 hover:to-emerald-300 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
            >
              {t('header.ctaButton')}
            </a>
          </nav>
        </div>
      )}

      {/* Fixed Language Switcher - Desktop Only */}
      <div className="hidden xl:block fixed top-6 right-6 z-40 shrink-0">
        <LanguageSwitch textColor={styles.text} hoverColor={styles.textHover} />
      </div>
    </header>
  );
};

export default Header;