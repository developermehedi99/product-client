import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddProducts from "./components/AddProducts";
import UpdateProducts from "./components/UpdateProducts";
import App from "./App";
import SingUp from "./components/SingUp";
import SingIn from "./components/SingIn";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/product"),
  },
  {
    path: "/addProduct",
    element: <AddProducts></AddProducts>,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProducts></UpdateProducts>,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "/singIn",
    element: <SingIn></SingIn>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
