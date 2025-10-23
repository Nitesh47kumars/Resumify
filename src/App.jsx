import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const Router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage/>
    }
  ])
  
  return <RouterProvider router={Router}/>;
}
