import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import DataContext from "./contexts/DataContext/DataContext";
import UserContext from "./contexts/UserContext/UserContext";
import "./index.css";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <DataContext>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </DataContext>
    </UserContext>
  </React.StrictMode>
);
