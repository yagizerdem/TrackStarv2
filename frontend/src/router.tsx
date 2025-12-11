import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
