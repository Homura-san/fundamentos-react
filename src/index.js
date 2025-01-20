import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primeiro />

    <ComParametro 
      titulo="Situação do Aluno"
      aluno="Carlos Pareira" nota={6.2}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
