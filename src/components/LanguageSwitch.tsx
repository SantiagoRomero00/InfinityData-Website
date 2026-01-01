import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageSwitchProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  variant = 'dark',
  className = ''
}) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const variantStyles = {
    light: 'text-white drop-shadow-lg hover:opacity-80',
    dark: 'text-gray-900 hover:text-emerald-600'
  };

  const textStyle = variantStyles[variant];

  return (
    <button
      onClick={toggleLanguage}
      className={`font-medium text-sm flex items-center space-x-2 min-h-[44px] min-w-[44px] transition-all duration-200 ${textStyle} ${className}`}
      aria-label="Switch language"
    >
      <span>{language === 'es' ? 'ES' : 'US'}</span>
      <img
        src={language === 'es' ? '/assets/flags/spain.svg' : '/assets/flags/usa.svg'}
        alt={language === 'es' ? 'Spain flag' : 'USA flag'}
        className="w-5 h-5 rounded"
      />
    </button>
  );
};

export default LanguageSwitch;
