import React from "react";
import Navbar from "../Pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
