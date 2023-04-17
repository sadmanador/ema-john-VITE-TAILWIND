import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/shared/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async(params) => {
          return fetch('/fakeData/products.json')
        }
      },
      {
        path: "*",
        element: <NotFound></NotFound>

      }
    ],
  },
]);
