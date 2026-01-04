import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
            {t('privacy.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-12">
            {t('privacy.lastUpdated')}
          </p>

          {/* Section 1 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              1. {t('privacy.section1.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
              {t('privacy.section1.description')}
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              {(Array.isArray(t('privacy.section1.items')) ? t('privacy.section1.items') : []).map((item: any, index: number) => (
                <li key={index} className="flex">
                  <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="break-words"><strong>{item.label}</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              2. {t('privacy.section2.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
              {t('privacy.section2.description')}
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              {(Array.isArray(t('privacy.section2.items')) ? t('privacy.section2.items') : []).map((item: string, index: number) => (
                <li key={index} className="flex">
                  <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <span className="break-words">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              3. {t('privacy.section3.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('privacy.section3.description')}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              4. {t('privacy.section4.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
              {t('privacy.section4.paragraph1')}
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
              {t('privacy.section4.paragraph2')}{' '}
              <a
                href={`mailto:${t('privacy.section4.email')}`}
                className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                {t('privacy.section4.email')}
              </a>.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('privacy.section4.paragraph3')}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
