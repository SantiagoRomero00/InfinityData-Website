import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Infinity, ArrowLeft, Mail, Calendar } from 'lucide-react';

const SuccessScreen = () => {
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
              <span>Volver</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ¡Solicitud Enviada!
          </h1>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Infinity className="w-16 h-16 text-emerald-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-400 opacity-20 rounded-full blur-sm"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Su solicitud fue enviada a Infinity Data
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hemos recibido tu solicitud correctamente. Nuestro equipo de expertos la revisará 
              y te contactará en las próximas 24 horas con una propuesta personalizada.
            </p>

            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Revisión de solicitud</h3>
                  <p className="text-gray-600 text-sm">Analizaremos tu caso en detalle</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacto directo</h3>
                  <p className="text-gray-600 text-sm">Te llamaremos en 24 horas</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">¿Tienes alguna pregunta?</h3>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <a href="mailto:infinitydata.team@gmail.com" className="hover:text-emerald-600 transition-colors">
                  infinitydata.team@gmail.com
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Volver al inicio
              </Link>
              <Link 
                to="/demo"
                className="bg-white border-2 border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Nueva solicitud
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-500 text-lg">
              Gracias por confiar en <span className="font-semibold text-emerald-600">Infinity Data</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuccessScreen;