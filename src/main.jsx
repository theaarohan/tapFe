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
import Root from './routes/root';
import Explore from './routes/explore';
import Auth from './routes/auth';
import ErrorRoute from "./routes/utilities/ErrorRoute"
import Section1 from './components/Section1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    errorElement: <ErrorRoute/>,
    children: [
      {
        path: "/",
        element: <Section1 />,
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
        path: "/auth",
        element: <Auth />,
        errorElement: <ErrorRoute/>,
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
