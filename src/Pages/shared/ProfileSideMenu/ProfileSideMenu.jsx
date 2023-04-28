import React from "react";
import {  NavLink } from "react-router-dom";

const ProfileSideMenu = () => {
  return (
    <div>
      <ul className="menu bg-slate-600 text-white w-56 rounded-box">
        <li>
          <NavLink to='/profile/info'>Info</NavLink>
        </li>
        <li>
          <NavLink to='/profile/update'>Update Profile</NavLink>
        </li>
        <li>
          <NavLink to='/profile/password_change'>Change Password</NavLink>
        </li>
        <li>
          <NavLink to='/profile/delete_user'>Delete User</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSideMenu;
