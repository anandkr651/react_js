import React from 'react';
import ReactDOM from 'react-dom/client';
//web ke Dom ko manipulate karene ki liya ,both libary kam aati hai . dom is just like a tree.

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
