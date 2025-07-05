import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [Passwordtype, setPasswordType] = useState("password");
  return (
    <div className="grid md:grid-cols-2 md:h-full md:overflow-hidden animate__animated animate__fadeIn">
      <div>
        <img
          src="/images/signup.jpg"
          className="w-full object-cover h-48 md:h-full"
        />
      </div>
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="font-bold text-4xl">Welcome Back User</h1>
        <p className="text-gray-600 text-lg">
          Login Your Account to start Shopping
        </p>
        <form className="mt-4">
          <div className="flex flex-col font-semibold">
            <label className="font-semibold text-lg mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col font-semibold relative">
            <label className="font-semibold text-lg mb-1">Enter Password</label>
            <input
              required
              type={Passwordtype}
              name="password"
              placeholder="Enter Your Password"
              className="p-3 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="absolute top-10 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600"
              onClick={() =>
                setPasswordType(
                  Passwordtype === "password" ? "text" : "password"
                )
              }
            >
              {Passwordtype === "password" ? (
                <i className="ri-eye-fill"></i>
              ) : (
                <i className="ri-eye-off-fill"></i>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="p-2 mt-4 font-semibold cursor-pointer hover:bg-[#007DFE] hover:text-[#1A2E35] rounded bg-black text-white text-lg text-center w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-2">Don't have an account <Link to='/signup' className="text-blue-600 font-semibold">Register Now</Link></div>
      </div>
    </div>
  );
};

export default Login;
