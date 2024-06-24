import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPages from "./pages/TodoPages.jsx";
import ListTodoPages from "@/pages/ListTodoPages.jsx";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <TodoPages />,
  },
  {
    path: "/",
    element: <ListTodoPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
