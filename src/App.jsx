import { useState } from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/projects",
    element: <Project/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
