import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/home" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
