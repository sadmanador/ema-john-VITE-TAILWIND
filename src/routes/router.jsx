import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/shared/NotFound/NotFound";
import OrderReview from "../Pages/RoutePages/OrderReview/OrderReview";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async (params) => {
          return fetch("/fakeData/products.json");
        },
      },
      {
        path: "/order-review",
        element: <OrderReview></OrderReview>,
        loader: async (params) => {
          return fetch("/fakeData/products.json");
        },
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
