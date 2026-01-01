import React from 'react';
import { Infinity, ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Footer from './Footer';
import LanguageSwitch from './LanguageSwitch';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Infinity className="w-8 h-8 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Infinity Data</span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('common.back')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Language Switcher */}
      <div className="fixed top-4 left-4 md:top-6 md:left-auto md:right-6 z-40">
        <LanguageSwitch textColor="text-gray-700/80" hoverColor="hover:text-gray-900" />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {t('terms.title')}
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            {t('terms.subtitle')}
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Al contratar los servicios de Infinity Data (en adelante, "El Prestador"), el Cliente acepta los presentes términos y condiciones, los cuales rigen el uso de nuestros servicios de consultoría, desarrollo de automatizaciones y mantenimiento.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Descripción del Servicio y Período de Prueba
            </h2>
            <ul className="space-y-4 text-gray-700 leading-relaxed ml-6">
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Alcance:</strong> Infinity Data provee servicios de automatización de procesos digitales, integración de APIs y asistentes virtuales.
                </div>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Período de Prueba:</strong> Se ofrecerá un período de prueba limitado para verificar el correcto funcionamiento de los flujos automatizados. Las condiciones específicas (duración, límite de ejecuciones o volumen de datos) serán comunicadas por escrito en la propuesta comercial enviada al Cliente. Una vez finalizado dicho período o alcanzado el límite estipulado, la continuación del uso del servicio implica la aceptación total de la funcionalidad entregada y la conformidad para la facturación correspondiente.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Limitación de Responsabilidad
            </h2>
            <ul className="space-y-4 text-gray-700 leading-relaxed ml-6">
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Dependencia de Terceros:</strong> El Cliente comprende que las automatizaciones dependen de la disponibilidad y funcionamiento de APIs de terceros (ej. Google, Meta, OpenAI, CRMs). El Prestador no será responsable por interrupciones del servicio, pérdida de datos o fallos causados por cambios en las políticas, caídas de servidores o actualizaciones de API de estas plataformas externas.
                </div>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Uso de Leads:</strong> Es responsabilidad exclusiva del Cliente asegurar que el uso de los datos obtenidos (envío de correos en frío, almacenamiento) cumpla con las leyes vigentes.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Propiedad Intelectual
            </h2>
            <ul className="space-y-4 text-gray-700 leading-relaxed ml-6">
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Del Cliente:</strong> El Cliente conserva la propiedad de todos los datos y credenciales suministrados.
                </div>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <div>
                  <strong>Del Prestador:</strong> La lógica de automatización, scripts personalizados y estructuras JSON desarrolladas por Infinity Data son propiedad intelectual del Prestador. Se otorga al Cliente una licencia de uso no exclusiva e intransferible tras el pago total del servicio.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Confidencialidad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ambas partes acuerdan mantener la estricta confidencialidad de toda la información comercial, técnica y financiera compartida. Infinity Data se compromete a no compartir, vender ni divulgar las API Keys o secretos comerciales del Cliente.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Pagos y Cancelación
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Los servicios recurrentes (Mantenimiento) se abonan por adelantado del 1 al 10 de cada mes. La cancelación de servicios recurrentes requiere un preaviso mínimo de 30 días. Los costos de suscripción a herramientas de terceros (software SaaS) corren por cuenta exclusiva del Cliente.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos se rigen por las leyes de la República Argentina. Para cualquier controversia derivada de la interpretación o ejecución de estos términos, las partes se someten a la jurisdicción de los Tribunales Ordinarios con asiento en la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
