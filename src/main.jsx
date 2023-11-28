import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_key);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster/>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <Elements stripe={stripePromise}>
        <RouterProvider router={Router} />
        </Elements>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
