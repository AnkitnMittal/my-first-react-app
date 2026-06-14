import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/index.css';

import App from './App.jsx';
import Login from './layouts/Login.jsx';
import Basics from './layouts/Basics.jsx';
import Intermediate from './layouts/Intermediate.jsx';
import Advanced from './layouts/Advanced.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import Profile from './pages/Profile.jsx';
import Greeting from './components/Greeting.jsx';
import Props from './components/Props.jsx';
import Render from './components/Render.jsx';
import State from './components/State.jsx';
import Update from './components/Update.jsx';
import SideEffect from './components/SideEffect.jsx';
import Class from './components/Class.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login',
    element: <Login />,
    children: [
      {
        path: ':name',
        element: <Profile />,
      },
    ],
  },
  {
    path: 'basics',
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
    path: 'intermediate',
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
    path: 'advanced',
    element: <Advanced />,
    children: [{ path: 'class', element: <Class /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
