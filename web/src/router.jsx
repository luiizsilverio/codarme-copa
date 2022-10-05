import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

export const Router = () => (
  <RouterProvider router={router} />
)
