import React from 'react';
import { Infinity, ArrowLeft, GraduationCap, Award, Zap, Search, Settings, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Footer from './Footer';
import LanguageSwitch from './LanguageSwitch';
import profileImage from '../../Assets/cropped_pp.jpeg';
import n8nLogo from '../../Assets/n8n.svg';
import makeLogo from '../../Assets/make.svg';
import openaiLogo from '../../Assets/openai.svg';
import phantombusterLogo from '../../Assets/phantombuster.svg';
import instantlyLogo from '../../Assets/instantly.svg';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t('common.back')}</span>
            </button>
            <div className="flex items-center space-x-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <div className="relative">
                <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">Infinity Data</span>
            </div>
            <div className="w-10 sm:w-24"></div>
          </div>
        </div>
      </header>

      {/* Fixed Language Switcher */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <LanguageSwitch variant="dark" />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <img
                  src={profileImage}
                  alt="Santiago - Fundador de Infinity Data"
                  className="w-full h-auto rounded-3xl shadow-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {t('about.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {t('about.bio.paragraph1')}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-10">
                {t('about.bio.paragraph2')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('about.credentials.education.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.credentials.education.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('about.credentials.expertise.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.credentials.expertise.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('about.credentials.results.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.credentials.results.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              {t('about.techStack.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <img
                  src={n8nLogo}
                  alt="n8n"
                  className="h-16 w-auto mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-sm text-gray-600 text-center font-medium">n8n</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <img
                  src={makeLogo}
                  alt="Make"
                  className="h-16 w-auto mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-sm text-gray-600 text-center font-medium">Make</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <img
                  src={openaiLogo}
                  alt="OpenAI"
                  className="h-16 w-auto mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-sm text-gray-600 text-center font-medium">OpenAI</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-5xl font-bold text-gray-400 grayscale group-hover:grayscale-0 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">SQL</div>
                </div>
                <p className="text-sm text-gray-600 text-center font-medium">{t('about.techStack.databases')}</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <img
                  src={phantombusterLogo}
                  alt="PhantomBuster"
                  className="h-16 w-auto mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-sm text-gray-600 text-center font-medium">PhantomBuster</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 group">
                <img
                  src={instantlyLogo}
                  alt="Instantly.ai"
                  className="h-16 w-auto mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-sm text-gray-600 text-center font-medium">Instantly.ai</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            {t('about.howWeWork.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Search className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t('about.howWeWork.step1.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.howWeWork.step1.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.howWeWork.step2.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.howWeWork.step2.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.howWeWork.step3.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.howWeWork.step3.description')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
