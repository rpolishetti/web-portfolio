import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/home/Home";
import ClientError from './pages/ClientError';

export default createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ClientError/>,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home/>
      }
    ],
  }
]);
