import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Infinity, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import ContactModal from './ContactModal';
import ReportIssueModal from './ReportIssueModal';

const Footer = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <footer className="bg-[#1D1D1F] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="relative">
                <Infinity className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 opacity-20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold">Infinity Data</span>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:santiagoromero@getinfinitydata.com" className="hover:text-emerald-400 transition-colors break-all text-sm sm:text-base">
                  santiagoromero@getinfinitydata.com
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/theinfinitydata/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
              >
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://x.com/TheInfinityData" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border border-gray-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group hover:border-gray-400"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/infinitydatasolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li><Link to="/demo?service=Automatización de procesos" className="hover:text-emerald-400 transition-colors inline-block py-1">{t('footer.services.processAutomation')}</Link></li>
              <li><Link to="/demo?service=Soporte al cliente" className="hover:text-emerald-400 transition-colors inline-block py-1">{t('footer.services.customerSupport')}</Link></li>
              <li><Link to="/demo?service=Planificador de llamadas" className="hover:text-emerald-400 transition-colors inline-block py-1">{t('footer.services.callScheduler')}</Link></li>
              <li><Link to="/demo?service=Integración de clientes" className="hover:text-emerald-400 transition-colors inline-block py-1">{t('footer.services.customerIntegration')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li><Link to="/nosotros" className="hover:text-emerald-400 transition-colors inline-block py-1">{t('footer.company.about')}</Link></li>
              <li>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-emerald-400 transition-colors inline-block py-1 text-left"
                >
                  {t('footer.company.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-gray-400 text-xs sm:text-sm text-center md:text-left">
              <span>{t('footer.copyright')}</span>
              <span className="hidden sm:inline">|</span>
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="text-gray-500 hover:text-emerald-500 transition-colors cursor-pointer"
              >
                {t('footer.report_issue')}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 text-center">
              <Link to="/privacidad" className="hover:text-emerald-400 transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terminos" className="hover:text-emerald-400 transition-colors break-words">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <ReportIssueModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;