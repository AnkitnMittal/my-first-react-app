import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Update from './pages/Update';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Update />
  </StrictMode>,
);
