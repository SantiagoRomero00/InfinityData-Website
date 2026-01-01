import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Infinity, ArrowLeft, Mail, Calendar } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitch from './LanguageSwitch';

const SuccessScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-base sm:text-xl font-bold text-gray-900">Infinity Data</span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t('common.back')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Language Switcher */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <LanguageSwitch variant="dark" />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {t('success.title')}
          </h1>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative">
                <Infinity className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('success.heading')}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              {t('success.description')}
            </p>

            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('success.nextSteps.review.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('success.nextSteps.review.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('success.nextSteps.contact.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('success.nextSteps.contact.description')}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t('success.questions.title')}</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-600 text-xs sm:text-sm md:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a href="mailto:santiagoromero@getinfinitydata.com" className="hover:text-emerald-600 transition-colors break-all">
                  santiagoromero@getinfinitydata.com
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                {t('success.buttons.backHome')}
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 text-center"
              >
                {t('success.buttons.newRequest')}
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center px-4">
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
              {t('success.footer')} <span className="font-semibold text-emerald-600">Infinity Data</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuccessScreen;