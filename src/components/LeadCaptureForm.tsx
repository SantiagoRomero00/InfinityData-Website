import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, AlertCircle, Loader2, Infinity, ArrowLeft } from 'lucide-react';
import { submitLeadForm, validateFormData } from '../utils/formSubmission';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitch from './LanguageSwitch';

interface FormData {
  name: string;
  email: string;
  service: string;
  company: string;
  problems: string;
  additionalInfo: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  company?: string;
  problems?: string;
}

const LeadCaptureForm = () => {
  console.log('✅ LeadCaptureForm component mounting...');

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get service from URL parameters using React Router hook
  const preselectedService = searchParams.get('service') || '';

  console.log('📋 Preselected service:', preselectedService);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: preselectedService,
    company: '',
    problems: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const serviceOptions = [
    { value: '', label: t('leadForm.serviceOptions.select') },
    { value: 'Automatización de procesos', label: t('leadForm.serviceOptions.processAutomation') },
    { value: 'Soporte al cliente', label: t('leadForm.serviceOptions.customerSupport') },
    { value: 'Planificador de llamadas', label: t('leadForm.serviceOptions.callScheduler') },
    { value: 'Integración de clientes', label: t('leadForm.serviceOptions.customerIntegration') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar formulario
    const validation = validateFormData(formData, t);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Enviar formulario
    const result = await submitLeadForm(formData);
    
    if (result.success) {
      // Redirect to success page
      navigate('/success');
    } else {
      setSubmitStatus('error');
      setErrorMessage(result.error || 'Error desconocido');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
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
              <span className="text-lg sm:text-2xl font-bold text-gray-900">Infinity Data</span>
            </div>

            <div className="w-10 sm:w-0"></div>
          </div>
        </div>
      </header>

      {/* Fixed Language Switcher */}
      <div className="fixed top-4 left-4 md:top-6 md:left-auto md:right-6 z-40">
        <LanguageSwitch textColor="text-gray-700/80" hoverColor="hover:text-gray-900" />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {t('leadForm.title.line1')}
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              {t('leadForm.title.line2')}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            {t('leadForm.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-emerald-800">{t('leadForm.success.title')}</h3>
                    <p className="text-emerald-700">{t('leadForm.success.message')}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800">{t('leadForm.error.title')}</h3>
                    <p className="text-red-700">{errorMessage}</p>
                    <p className="text-red-600 text-sm mt-2">
                      {t('leadForm.error.contactMessage')}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                    {t('leadForm.fields.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-emerald-500'
                    }`}
                    placeholder={t('leadForm.placeholders.name')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('leadForm.fields.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-emerald-500'
                    }`}
                    placeholder={t('leadForm.placeholders.email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('leadForm.fields.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-900 transition-colors focus:outline-none focus:ring-0 ${
                      errors.service 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    }`}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('leadForm.fields.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 ${
                      errors.company
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-emerald-500'
                    }`}
                    placeholder={t('leadForm.placeholders.company')}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Problems */}
                <div>
                  <label htmlFor="problems" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('leadForm.fields.problems')}
                  </label>
                  <textarea
                    id="problems"
                    name="problems"
                    value={formData.problems}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 resize-none ${
                      errors.problems
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-emerald-500'
                    }`}
                    placeholder={t('leadForm.placeholders.problems')}
                    aria-describedby={errors.problems ? 'problems-error' : undefined}
                  />
                  {errors.problems && (
                    <p id="problems-error" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.problems}
                    </p>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('leadForm.fields.additionalInfo')}
                    <span className="text-gray-500 font-normal ml-2">{t('leadForm.fields.optional')}</span>
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 transition-colors focus:outline-none focus:ring-0 focus:border-emerald-500 resize-none"
                    placeholder={t('leadForm.placeholders.additionalInfo')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-400 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                      <span>{t('leadForm.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('leadForm.submitButton')}</span>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Trust Indicators */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t('leadForm.whyUs.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('leadForm.whyUs.benefit1.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('leadForm.whyUs.benefit1.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('leadForm.whyUs.benefit2.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('leadForm.whyUs.benefit2.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('leadForm.whyUs.benefit3.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('leadForm.whyUs.benefit3.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('leadForm.contactInfo.title')}</h3>
              <p className="text-emerald-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {t('leadForm.contactInfo.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold">{t('leadForm.contactInfo.email')}</p>
                    <p className="text-emerald-100 text-sm break-all">infinitydata.team@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold">{t('leadForm.contactInfo.support')}</p>
                    <p className="text-emerald-100 text-sm">{t('leadForm.contactInfo.liveChat')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto">
            {t('leadForm.privacyNotice')}
          </p>
        </div>
      </main>
    </div>
  );
};

export default LeadCaptureForm;