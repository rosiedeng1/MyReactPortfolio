import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import AboutMe from './pages/AboutMe';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: 'about',
    //     element: <AboutMe />,
    //   },
    // ],
  },
  {
    path: '/about',
    element: <AboutMe />,
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
