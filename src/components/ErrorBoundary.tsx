import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('🚨 ErrorBoundary caught an error:', error);
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Error details:', error);
    console.error('🚨 Error info:', errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Algo salió mal
              </h1>

              <p className="text-lg text-gray-600 text-center mb-8">
                Lo sentimos, ocurrió un error inesperado. Por favor, intenta nuevamente o vuelve al inicio.
              </p>

              {this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-red-800 font-mono break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Volver al inicio</span>
                </Link>

                <button
                  onClick={() => window.location.reload()}
                  className="bg-white border-2 border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  Recargar página
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Si el problema persiste, contáctanos en{' '}
                  <a href="mailto:infinitydata.team@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    infinitydata.team@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
