import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/index.css';

import App from './App.jsx';
import Basics from './Basics.jsx';
import Intermediate from './Intermediate.jsx';
import Advanced from './Advanced.jsx';

import Greeting from './pages/Greeting.jsx';
import Props from './pages/Props.jsx';
import Render from './pages/Render.jsx';
import State from './pages/State.jsx';
import Update from './pages/Update.jsx';
import SideEffect from './pages/SideEffect.jsx';
import Class from './pages/Class.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/basics',
    element: <Basics />,
    children: [
      {
        path: 'greeting',
        element: <Greeting />,
      },
      {
        path: 'props',
        element: <Props />,
      },
      {
        path: 'render',
        element: <Render />,
      },
    ],
  },
  {
    path: '/intermediate',
    element: <Intermediate />,
    children: [
      {
        path: 'state',
        element: <State />,
      },
      {
        path: 'update',
        element: <Update />,
      },
      {
        path: 'side-effect',
        element: <SideEffect />,
      },
    ],
  },
  {
    path: '/advanced',
    element: <Advanced />,
    children: [{ path: 'class', element: <Class /> }],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
