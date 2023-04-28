import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext/UserContext";

const ProfileInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="rounded lg:w-80 p-4 border">
      <h2 className="font-bold text-xl text-center mb-5">Info</h2>
      <form>
        {user?.photoURL && <img src={user?.photoURL} />}
        <label className="block">Email</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="email"
          value={user?.email}
          readOnly
        />
        <label className="block">Name</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="text"
          value={user?.displayName}
          readOnly
        />
        <label className="block">Address</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="text"
          value={user?.address}
          readOnly
        />
        <div className="mt-4">
          <label className="mr-6">Email verified</label>
          {user?.emailVerified ? (
            <input type="checkbox" className="toggle" checked readOnly />
          ) : (
            <input type="checkbox" className="toggle" disabled />
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
