import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'pages/Home/Home.jsx';
import { Contact } from 'pages/Contact/Contact.jsx';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/contact/:id',
    element: <Contact />,
  },
  {
    path: '*',
    element: <ErrorBoundary />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
