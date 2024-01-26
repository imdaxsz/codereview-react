import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/global.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from 'stores';
import Loader from '@components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
