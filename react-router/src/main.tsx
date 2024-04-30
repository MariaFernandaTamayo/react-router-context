//main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Login from './routes/Login.tsx';
import Contact from './routes/Contact.tsx';
import Overview from './routes/Overview.tsx';
import ProtectedRoute from './routes/Protection.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';

const router= createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
  element: <ProtectedRoute/>,
  children: [
    {
      path:"/home",
      element: < Home/>
    }
  ]
  },
  {
    path: "/",
  element: <ProtectedRoute/>,
  children: [
    {
      path:"/contact",
      element: < Contact/>
    }
  ]
  },
  {
    path: "/",
  element: <ProtectedRoute/>,
  children: [
    {
      path:"/overview",
      element: < Overview/>
    }
  ]
  }
]);  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
       
  </React.StrictMode>,
)


