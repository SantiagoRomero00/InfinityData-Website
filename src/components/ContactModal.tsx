import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import whatsappIcon from '../../Assets/whatsapp.svg';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useTranslation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const generateWhatsAppLink = () => {
    const phoneNumber = '5491155025482';
    const message = t('contactModal.whatsapp.message');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      <div
        className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
            aria-label={t('contactModal.close')}
          >
            <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
          </button>

          <div className="mb-6 sm:mb-8">
            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
            >
              {t('contactModal.title')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t('contactModal.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${t('contactModal.email.address')}`}
              className="flex items-center p-4 sm:p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 cursor-pointer group min-h-[64px]"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-semibold text-gray-900 text-base sm:text-lg">
                  {t('contactModal.email.label')}
                </div>
                <div className="text-sm text-emerald-600 break-all mt-1">
                  {t('contactModal.email.address')}
                </div>
              </div>
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 sm:p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 cursor-pointer group min-h-[64px]"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-semibold text-gray-900 text-base sm:text-lg">
                  {t('contactModal.whatsapp.label')}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ContactModal;
