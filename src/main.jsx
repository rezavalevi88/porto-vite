import React from 'react';
import ReactDOM from 'react-dom'; // Menggunakan ReactDOM dari 'react-dom'
import App from './App.jsx';
import './index.css';
import 'slick-carousel/slick/slick.css'; // Mengimpor CSS slick
import 'slick-carousel/slick/slick-theme.css'; // Mengimpor CSS tema slick

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
