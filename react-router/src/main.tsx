import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Login from './routes/Login.tsx';
import Contact from './routes/Contact.tsx';
import Overview from './routes/Overview.tsx';
import ProtectedRoute from './routes/Protection.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Navigate to = "/login" />,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/overview",
        element: <Overview/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/*",
        element: <Home />,
      },
    ]
  }
]);  

// Redirige directamente a /login cuando la ruta principal sea visitada
if (window.location.pathname === '/') {
  window.location.href = '/login';
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);