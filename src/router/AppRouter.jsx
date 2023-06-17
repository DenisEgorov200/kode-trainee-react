import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
    errorElement: <div>Route not found</div>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
