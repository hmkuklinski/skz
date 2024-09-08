import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Albums from "./components/Albums";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <Blog />,
  },
  {
    path: "/music",
    element: <Albums/>,
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
