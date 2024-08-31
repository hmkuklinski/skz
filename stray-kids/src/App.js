import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"
import Members from "./pages/Members"
import News from "./pages/News"

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/members",
    element: <Members />
  },
  {
    path: "/news",
    element: <News />
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
