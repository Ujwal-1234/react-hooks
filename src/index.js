import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './operation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);

