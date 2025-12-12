import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import VoiceflowWidget from './components/VoiceflowWidget';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load the form component for better performance
const LeadCaptureForm = lazy(() => import('./components/LeadCaptureForm'));
const SuccessScreen = lazy(() => import('./components/SuccessScreen'));
const ServiceDemo = lazy(() => import('./components/ServiceDemo'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

// Loading component
const LoadingSpinner = () => {
  console.log('⏳ LoadingSpinner showing...');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Cargando...</p>
      </div>
    </div>
  );
};

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <ServicesGrid />
    <HowItWorks />
    <FinalCTA />
    <Footer />
  </>
);

function App() {
  console.log('🚀 App component rendering...');

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen">
          <Routes>
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
          </Routes>
          {/* Voiceflow Widget - Available on all pages */}
          <VoiceflowWidget />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;