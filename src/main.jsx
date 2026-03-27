import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Greeting from './Examples/Greeting.jsx';
import Props from './Examples/Props.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Props />
  </StrictMode>,
);
