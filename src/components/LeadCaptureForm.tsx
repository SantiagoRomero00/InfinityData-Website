import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, AlertCircle, Loader2, Mail, MessageCircle } from 'lucide-react';
import { submitLeadForm, validateFormData } from '../utils/formSubmission';
import { useTranslation } from '../hooks/useTranslation';

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

  const generateWhatsAppLink = () => {
    const phoneNumber = '5491155025482';
    const message = t('contactModal.whatsapp.message');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

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

  // Update service when URL parameter changes
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceParam !== formData.service) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
      console.log('🔄 Service updated from URL:', serviceParam);
    }
  }, [searchParams]);

  const serviceOptions = [
    { value: '', label: t('leadForm.serviceOptions.select') },
    { value: 'Automatización de procesos', label: t('leadForm.serviceOptions.processAutomation') },
    { value: 'Soporte al cliente', label: t('leadForm.serviceOptions.customerSupport') },
    { value: 'web-development', label: t('leadForm.serviceOptions.websiteDevelopment') },
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
    <div className="min-h-screen bg-brand-slate-950 pt-24 selection:bg-brand-emerald-500/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-20 relative">
        {/* Ambient Glows */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-brand-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-12 sm:mb-20 relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {t('leadForm.title.line1')}{' '}
            <span className="bg-gradient-to-r from-brand-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t('leadForm.title.line2')}
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4 font-medium tracking-tight">
            {t('leadForm.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-brand-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-6 sm:p-12 shadow-2xl shadow-black/50">
              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-500">{t('leadForm.error.title')}</h3>
                    <p className="text-red-400/80 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 ml-1">
                      {t('leadForm.fields.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 bg-brand-slate-950/50 border-2 rounded-2xl text-white placeholder-slate-600 transition-all focus:outline-none focus:ring-0 ${errors.name
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/5 focus:border-brand-emerald-500/50'
                        }`}
                      placeholder={t('leadForm.placeholders.name')}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 ml-1">
                      {t('leadForm.fields.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 bg-brand-slate-950/50 border-2 rounded-2xl text-white placeholder-slate-600 transition-all focus:outline-none focus:ring-0 ${errors.email
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/5 focus:border-brand-emerald-500/50'
                        }`}
                      placeholder={t('leadForm.placeholders.email')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Service Selection */}
                  <div className="space-y-3">
                    <label htmlFor="service" className="block text-sm font-bold text-slate-300 ml-1">
                      {t('leadForm.fields.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-brand-slate-950/50 border-2 border-white/5 rounded-2xl text-white transition-all focus:outline-none focus:ring-0 focus:border-brand-emerald-500/50 appearance-none"
                    >
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-brand-slate-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-3">
                    <label htmlFor="company" className="block text-sm font-bold text-slate-300 ml-1">
                      {t('leadForm.fields.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-brand-slate-950/50 border-2 border-white/5 rounded-2xl text-white placeholder-slate-600 transition-all focus:outline-none focus:ring-0 focus:border-brand-emerald-500/50"
                      placeholder={t('leadForm.placeholders.company')}
                    />
                  </div>
                </div>

                {/* Problems */}
                <div className="space-y-3">
                  <label htmlFor="problems" className="block text-sm font-bold text-slate-300 ml-1">
                    {t('leadForm.fields.problems')}
                  </label>
                  <textarea
                    id="problems"
                    name="problems"
                    value={formData.problems}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-brand-slate-950/50 border-2 border-white/5 rounded-2xl text-white placeholder-slate-600 transition-all focus:outline-none focus:ring-0 focus:border-brand-emerald-500/50 resize-none"
                    placeholder={t('leadForm.placeholders.problems')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-brand-emerald-500 hover:bg-brand-emerald-400 disabled:bg-slate-800 text-white px-8 py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-xl shadow-brand-emerald-500/10 flex items-center justify-center space-x-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>{t('leadForm.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('leadForm.submitButton')}</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Why Us */}
            <div className="bg-brand-slate-900/50 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{t('leadForm.whyUs.title')}</h3>
              <div className="space-y-8">
                {[
                  { icon: CheckCircle, title: t('leadForm.whyUs.benefit1.title'), desc: t('leadForm.whyUs.benefit1.description') },
                  { icon: Shield, title: t('leadForm.whyUs.benefit2.title'), desc: t('leadForm.whyUs.benefit2.description') },
                  { icon: CheckCircle, title: t('leadForm.whyUs.benefit3.title'), desc: t('leadForm.whyUs.benefit3.description') }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-emerald-500/20">
                      <item.icon className="w-5 h-5 text-brand-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-brand-emerald-600 to-emerald-500 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 tracking-tight">{t('leadForm.contactInfo.title')}</h3>
                <p className="text-emerald-50/80 mb-8 leading-relaxed font-medium">
                  {t('leadForm.contactInfo.description')}
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:santiagoromero@getinfinitydata.com"
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10 backdrop-blur-sm"
                  >
                    <Mail className="w-6 h-6 text-white" />
                    <span className="font-bold text-sm truncate">{t('contact.email_address')}</span>
                  </a>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white text-brand-emerald-600 p-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-black text-sm">{t('contact.whatsapp_title')}</span>
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-20 text-center opacity-50">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium">
            {t('leadForm.privacyNotice')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureForm;