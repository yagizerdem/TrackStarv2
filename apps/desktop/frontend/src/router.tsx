import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./pages/home";
import { AccountPage } from "./pages/account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
]);
