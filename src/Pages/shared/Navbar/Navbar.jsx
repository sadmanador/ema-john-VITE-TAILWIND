import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/DataContext/DataContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { AuthContext } from "../../../contexts/UserContext/UserContext";

const Navbar = () => {
  const { cart, grandTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
  }

  return (
    <div className="App bg-slate-800 text-white px-32">
      <div className="navbar h-20">
        <Link to="/" className="flex-1">
          <img src="images/Logo.svg" alt="" />
        </Link>

        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order-review">Order Review</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-center hidden lg:flex flex-1">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/order-review"
              >
                Order Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                404
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>

        {/* cart icon */}
        <div className="flex-none">
          {/* profile Pic */}

          {user?.uid ? (
            <div className="dropdown dropdown-end mr-8">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-18 rounded-full">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}

          {user?.uid && <button className="mx-8">Log Out</button>}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {quantity}
                </span>
              </div>
            </label>

            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body text-black shadow rounded-md">
                <span className="font-bold text-lg">{quantity} Items</span>
                <span className="text-info text-xl">
                  Subtotal: ${grandTotal}
                </span>
                <Link to="order-review" className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
