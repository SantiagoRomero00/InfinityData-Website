import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Footer from './Footer';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
            {t('terms.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-12">
            {t('terms.subtitle')}
          </p>

          {/* Section 1 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              1. {t('terms.section1.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('terms.section1.description')}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              2. {t('terms.section2.title')}
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              {t('terms.section2.items').map((item: any, index: number) => (
                <li key={index} className="flex">
                  <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <div className="break-words">
                    <strong>{item.label}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              3. {t('terms.section3.title')}
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              {t('terms.section3.items').map((item: any, index: number) => (
                <li key={index} className="flex">
                  <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <div className="break-words">
                    <strong>{item.label}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              4. {t('terms.section4.title')}
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              {t('terms.section4.items').map((item: any, index: number) => (
                <li key={index} className="flex">
                  <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                  <div className="break-words">
                    <strong>{item.label}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              5. {t('terms.section5.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('terms.section5.description')}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              6. {t('terms.section6.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('terms.section6.description')}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
              7. {t('terms.section7.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              {t('terms.section7.description')}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
