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
      className={`font-medium text-xs md:text-sm flex items-center space-x-1.5 md:space-x-2 min-h-[44px] min-w-[44px] transition-colors duration-300 ${textColor} ${hoverColor} ${className}`}
      aria-label="Switch language"
    >
      <span>{language === 'es' ? 'ES' : 'US'}</span>
      <img
        src={language === 'es' ? '/assets/flags/spain.svg' : '/assets/flags/usa.svg'}
        alt={language === 'es' ? 'Spain flag' : 'USA flag'}
        className="w-4 h-4 md:w-5 md:h-5 rounded"
      />
    </button>
  );
};

export default LanguageSwitch;
