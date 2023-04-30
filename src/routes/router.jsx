import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/shared/NotFound/NotFound";
import OrderReview from "../Pages/RoutePages/OrderReview/OrderReview";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProfile from "../Pages/Profile/UpdateProfile/UpdateProfile";
import PasswordReset from "../Pages/Profile/PasswordReset/PasswordReset";
import DeleteAccount from "../Pages/Profile/DeleteAccount/DeleteAccount";
import ProfileLayouts from "../layouts/ProfileLayouts";
import ProfileInfo from "../Pages/Profile/ProfileInfo/ProfileInfo";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <OrderReview/>
          </PrivateRoute>
        ),
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
      {
        path: "/profile",
        element: <ProfileLayouts></ProfileLayouts>,
        children: [
          {
            path: "/profile/info",
            element: <ProfileInfo></ProfileInfo>,
          },
          {
            path: "/profile/update",
            element: <UpdateProfile></UpdateProfile>,
          },
          {
            path: "/profile/password_change",
            element: <PasswordReset></PasswordReset>,
          },
          {
            path: "/profile/delete_user",
            element: <DeleteAccount></DeleteAccount>,
          },
        ],
      },
    ],
  },
]);
