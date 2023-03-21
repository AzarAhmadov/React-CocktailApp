
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);