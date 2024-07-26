import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index={true} element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='*' element={<div>not founs</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();