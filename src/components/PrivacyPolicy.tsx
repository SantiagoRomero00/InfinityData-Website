import React from 'react';
import { Infinity, ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Footer from './Footer';
import LanguageSwitch from './LanguageSwitch';

const PrivacyPolicy = () => {
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
        <LanguageSwitch textColor="text-gray-700/80" hoverColor="hover:text-gray-900" />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
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
              1. Información que Recopilamos
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
              Para la correcta ejecución de nuestros servicios de automatización e inteligencia artificial, podemos recopilar y procesar los siguientes tipos de datos:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed ml-4 sm:ml-6">
              <li className="flex">
                <span className="mr-2 sm:mr-3 flex-shrink-0">•</span>
                <span className="break-words"><strong>Datos de Identificación:</strong> Nombre, apellido, dirección de correo electrónico, teléfono y cargo profesional.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span><strong>Datos Técnicos y de Automatización:</strong> Credenciales de API (API Keys), Tokens de acceso, Webhooks y estructuras de datos (JSON) necesarios para la integración de aplicaciones.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador y cookies técnicas necesarias para el funcionamiento del sitio.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Finalidad del Tratamiento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De conformidad con la Ley 25.326, se informa que la finalidad de la recolección de datos es:
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed ml-6">
              <li className="flex">
                <span className="mr-3">•</span>
                <span>Diseñar, implementar y mantener flujos de trabajo automatizados (Workflows) en plataformas como n8n y Make.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span>Gestionar campañas de captación de leads y enriquecimiento de datos a solicitud del cliente.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span>Procesar la facturación y cobranza de servicios.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span>Garantizar la seguridad de las integraciones activas.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Integraciones con Terceros (Cesión de Datos)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El Cliente reconoce y acepta que, para la prestación del servicio, Infinity Data actúa como integrador tecnológico. Ciertos datos pueden ser procesados a través de servidores de proveedores externos internacionales, incluyendo: OpenAI, Instantly.ai, PhantomBuster, Make.com y n8n. Infinity Data se compromete a utilizar únicamente proveedores que cumplan con estándares internacionales de seguridad de la información.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Derechos del Titular de los Datos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para ejercer los derechos de acceso, rectificación y supresión, envíe una solicitud a{' '}
              <a
                href="mailto:infinitydata.team@gmail.com"
                className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                infinitydata.team@gmail.com
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La Dirección Nacional de Protección de Datos Personales, órgano de control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
