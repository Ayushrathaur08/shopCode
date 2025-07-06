import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import firebaseApp from "../utils/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(firebaseApp);

const Login = () => {
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()
  const [error,setError]=useState(null)
  const [Passwordtype, setPasswordType] = useState("password");
  const [formValue, setFormValue] = useState({
    email:'',
    password:'',
  })
  const loginHandler =async (e) => {
    try {
      e.preventDefault();
      setLoader(true)
      await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
      navigate("/");
    } catch (err) {
      setLoader(true)
      setError(err);
    } finally {
      setLoader(false)
    }

  }
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]: value
    })
    setError(null)

  }

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
        <div></div>
        <form className="mt-4" onSubmit={loginHandler}>
          <div className="flex flex-col font-semibold">
            <label className="font-semibold text-lg mb-1">Email</label>
            <input
              value={formValue.email}
              onChange={handleChange}
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
              value={formValue.password}
              onChange={handleChange}
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
          {
            loader ?
              <p className="disable font-semibold text-lg p-2 mt-4 rounded bg-black text-white text-center w-full">Loading...</p>
              :
          <button
            type="submit"
            className="p-2 mt-4 font-semibold cursor-pointer hover:bg-[#007DFE] hover:text-[#1A2E35] rounded bg-black text-white text-lg text-center w-full"
          >
            Login
          </button>
          }
        </form>
        <div className="mt-2">
          Don't have an account{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Register Now
          </Link>
        </div>
        {error && (
          <div className="flex justify-between items-center mt-2 p-2 bg-rose-600 rounded shadow text-white text-center font-semibold animate__animated animate-pulse">
            <p className="w-11/12">{error.message}</p>
            <button onClick={() => setError(null)}>
              <i className="ri-close-circle-fill cursor-pointer text-2xl"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
