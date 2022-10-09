import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

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
  },
  {
    path: "/:username",
    element: <Profile />
  }
]);

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}
