import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";

export default function App() {
  const Router = createBrowserRouter([
    {
      path:"/",
      element: <Header/>
    }
  ])
  
  return <RouterProvider router={Router}/>;
}
