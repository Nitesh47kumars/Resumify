import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";

export default function App() {
  const Router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage/>
    }
  ])
  
  return <RouterProvider router={Router}/>;
}
