import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitch = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg border border-gray-200 hover:border-emerald-400 hover:text-emerald-600 transition-all duration-200 font-medium text-sm flex items-center space-x-2 min-h-[44px]"
      aria-label="Switch language"
    >
      <span className="text-base">{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
      <span>{language === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitch;
