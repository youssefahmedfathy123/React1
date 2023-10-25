import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Puplic } from './Components/Puplic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Puplic >
          <App />
    </Puplic>
  </React.StrictMode>
);
