import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const ServiceWorkerWrapper = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
       
      });
    }
  }, []);

  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ServiceWorkerWrapper />
      <App />
    </HelmetProvider>
  </StrictMode>,
);
