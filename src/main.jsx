import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'preline';
import { GeistProvider, CssBaseline } from '@geist-ui/core'

// ReactRouter setup - 25Jul2023
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// Routes imports

import { ErrorRoute } from "./routes/utilities"
import {Root, Explore, Content, Auth, Admin } from './routes';
import { LoginComponent, RegisterComponent, Section1Component } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    errorElement: <ErrorRoute/>,
    children: [
      {
        path: "/",
        element: <Section1Component />,
        errorElement: <ErrorRoute/>,
        // loader: teamLoader,
      },
      {
        path: "/explore",
        element: <Explore />,
        errorElement: <ErrorRoute/>,
        // loader: teamLoader,
      },
      {
        path: "/content/:contentId",
        element: <Content />,
        errorElement: <ErrorRoute/>,
        // loader: teamLoader,
      },
      {
        path: "/auth",
        // element: <Auth />,
        errorElement: <ErrorRoute/>,
        children :[
        {
          path: "/auth/login",
          element: <LoginComponent />,
          errorElement: <ErrorRoute/>,
        }, 
        {
          path: "/auth/register",
          element: <RegisterComponent />,
          errorElement: <ErrorRoute/>,
        },
        ]
        // loader: teamLoader,
      },
      {
        path: "/admin",
        // element: <Auth />,
        errorElement: <ErrorRoute/>,
        children :[
        {
          path: "/admin/new",
          element: <Admin/>,
          errorElement: <ErrorRoute/>,
        }, 
        ]
        // loader: teamLoader,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Geist UI Wrapper */}
    <GeistProvider>
    <CssBaseline /> 
      <RouterProvider router={router} />
    </GeistProvider>
  </React.StrictMode>,
)
