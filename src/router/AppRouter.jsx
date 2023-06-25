import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'pages/Home/Home.jsx';
import { Contacts } from 'pages/Contacts/Contacts.jsx';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/contacts/:id',
    element: <Contacts />,
  },
  {
    path: '*',
    element: <ErrorBoundary />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
