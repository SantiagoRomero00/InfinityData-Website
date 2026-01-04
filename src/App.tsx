import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useTranslation } from './hooks/useTranslation';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
// import VoiceflowWidget from './components/VoiceflowWidget';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load the form component for better performance
const LeadCaptureForm = lazy(() => import('./components/LeadCaptureForm'));
const SuccessScreen = lazy(() => import('./components/SuccessScreen'));
const ServiceDemo = lazy(() => import('./components/ServiceDemo'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const AboutUs = lazy(() => import('./components/AboutUs'));

// Loading component
const LoadingSpinner = () => {
  const { t } = useTranslation();
  console.log('⏳ LoadingSpinner showing...');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">{t('common.loading')}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </>
  );
};

function App() {
  console.log('🚀 App component rendering...');

  return (
    <LanguageProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                {/* ServiceDemo route temporarily disabled - keeping code for potential future use
                <Route
                  path="/service-demo"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ServiceDemo />
                    </Suspense>
                  }
                />
                */}
                <Route
                  path="/demo"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <LeadCaptureForm />
                    </Suspense>
                  }
                />
                <Route
                  path="/success"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <SuccessScreen />
                    </Suspense>
                  }
                />
                <Route
                  path="/privacidad"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <PrivacyPolicy />
                    </Suspense>
                  }
                />
                <Route
                  path="/terminos"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <TermsOfService />
                    </Suspense>
                  }
                />
                <Route
                  path="/nosotros"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <AboutUs />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
            {/* Voiceflow Widget - Available on all pages */}
            {/* <VoiceflowWidget /> */}
          </div>
        </ErrorBoundary>
      </Router>
    </LanguageProvider>
  );
}

export default App;