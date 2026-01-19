import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../lib/supabase';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportIssueModal: React.FC<ReportIssueModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  useEffect(() => {
    if (!isOpen) {
      setDescription('');
      setStatus('idle');
    }
  }, [isOpen]);

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!description.trim()) {
      return;
    }

    setStatus('submitting');

    try {
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0];

      const { error } = await supabase
        .from('Website_Problems_Reports')
        .insert([
          {
            Problem: description.trim(),
            Date: dateStr,
            Time: timeStr
          }
        ]);

      if (error) {
        console.error('Error submitting report:', error);
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      setStatus('error');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && status !== 'submitting') {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      <div
        className={`relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          disabled={status === 'submitting'}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={t('report.close')}
        >
          <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('report.success')}
            </h3>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2
                id="modal-title"
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                {t('report.title')}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('report.placeholder')}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors resize-none text-gray-900"
                  disabled={status === 'submitting'}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{t('report.error')}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || !description.trim()}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t('report.submitting') : t('report.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ReportIssueModal;
