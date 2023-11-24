import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}/>
    </AuthProvider>
  </React.StrictMode>
);