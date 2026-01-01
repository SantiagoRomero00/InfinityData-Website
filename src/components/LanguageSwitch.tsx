import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageSwitchProps {
  textColor?: string;
  hoverColor?: string;
  className?: string;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  textColor = 'text-gray-900',
  hoverColor = 'hover:text-emerald-600',
  className = ''
}) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`font-medium text-xs md:text-sm flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] transition-colors duration-300 ${textColor} ${hoverColor} ${className}`}
      aria-label="Switch language"
    >
      <img
        src={language === 'es' ? '/assets/flags/spain.svg' : '/assets/flags/usa.svg'}
        alt={language === 'es' ? 'Spain flag' : 'USA flag'}
        className="w-5 h-5 md:w-6 md:h-6 rounded shadow-sm"
      />
      <span className="text-[10px] md:text-xs font-semibold tracking-wide">{language === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitch;
