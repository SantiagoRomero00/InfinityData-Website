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
      className="px-3 py-2 rounded-lg border border-gray-200 hover:border-emerald-400 text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm flex items-center space-x-2 min-h-[44px]"
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
