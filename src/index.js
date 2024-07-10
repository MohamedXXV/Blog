import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer';
import Connection from './Components/Connection';
import '../src/Assets/style/index.css';
import "bootstrap/dist/css/bootstrap.min.css";







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Connection />
  <Footer />
  </React.StrictMode>
);
