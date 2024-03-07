import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./assets/Pages/Home.tsx";
// import { AudienceLogin } from "./assets/Pages/AudienceLogin.tsx";
// import { HostLogin } from "./assets/Pages/HostLogin.tsx";
// import { Questions } from "./assets/Pages/Questions.tsx";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/audiencelogin", element: <AudienceLogin/> },
//   { path: "/hostlogin", element: <HostLogin/>},
//   { path: "/questions", element: <Questions/>}
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);