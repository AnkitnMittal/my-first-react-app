import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import SideEffect from './pages/SideEffect';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideEffect />
  </StrictMode>,
);
