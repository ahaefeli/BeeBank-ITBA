import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './css/main/main-unlogged.css';
import './css/main/main-logged.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);