import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Greeting from './Examples/Greeting.jsx';
import Props from './Examples/Props.jsx';
import Render from './Examples/Render.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Props />
    <Render />
  </StrictMode>,
);
