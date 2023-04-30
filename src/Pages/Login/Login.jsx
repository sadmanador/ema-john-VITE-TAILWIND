import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import { Result } from "postcss";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`${user?.displayName} successfully logged in`);
        setError(null);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="rounded mx-auto lg:w-80 p-4 lg:my-16 login">
      <h2 className="font-bold text-3xl text-center mb-5">Login</h2>
      <form onSubmit={handleLogin}>
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
        <Link to="/signUp" style={{ color: "#fed7aa" }}>
          Create a new account
        </Link>
      </small>
      <p className="text-center my-3">or</p>
      <button className="w-full border rounded px-10 py-2 btn bg-disable hover:bg-orange-300">
        <FcGoogle className="inline mr-2 text-xl" />
        Continue with google
      </button>
      {error && <p className="mt-8 text-red-600">{error}</p>}
    </div>
  );
};

export default Login;
