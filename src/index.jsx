import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Holi from './Saludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Holi lugar="CAT CAKE.S" ciudad="LA PAZ" dias="LUNES" horas="10:00 " horas2="16:00 " dias2="VIERNES"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals