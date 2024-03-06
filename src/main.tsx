import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home.tsx";
import Test from "./assets/Pages/test.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/test", element: <Test /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
