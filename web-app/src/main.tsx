import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Tomorrow from './routes/Tomorrow';
import Navigation from './components/Navigation';
import ErrorPage from './ErrorPage';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tomorrow',
    element: <Tomorrow />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-dvh w-full">
      <Navigation />
      <div className="max-w-xl m-auto m-0 text-center mt-12">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
