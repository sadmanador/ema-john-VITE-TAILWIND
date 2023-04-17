import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataContext from "./contexts/DataContext/DataContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={router}></RouterProvider>
    </DataContext>
  </React.StrictMode>
);
