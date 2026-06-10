import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Class from './pages/Class.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Class />
  </StrictMode>,
);
