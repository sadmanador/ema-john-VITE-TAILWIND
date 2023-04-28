import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="rounded mx-auto lg:w-80 p-4 lg:mt-24 login">
      <h2 className="font-bold text-3xl text-center mb-5">Login</h2>
      <form>
        <label className="block">Email</label>
        <input
          className="block border rounded w-full"
          type="email"
          name="email"
        />
        <label className="block">Password</label>
        <input
          className="block border rounded w-full"
          type="password"
          name="password"
        />
        <input
          className="btn w-full mt-5 bg-orange-200 border-none normal-case"
          type="submit"
          value="Login"
        />
      </form>
      <small className="mx-auto">
        New to Ema-john?{" "}
        <Link style={{ color: "#fed7aa" }}>Create a new account</Link>
      </small>
      <p className="text-center my-3">or</p>
      <button className="w-full border rounded px-10 py-2 btn bg-disable hover:bg-orange-300">
        <FcGoogle className="inline mr-2 text-xl"/>
         Continue with google
      </button>
    </div>
  );
};

export default Login;
