import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import firebaseApp from '../utils/firebase-config';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";


const auth = getAuth(firebaseApp);


const Signup = () => {
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()
  const [error,setIsError]=useState(null)
  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    password:''
  })
  const changeHandler = (e) => {
    const {name,value}=e.target
    setFormValue({
      ...formValue,
      [name]:value,
    })
    setIsError(null)
    
    
  }
  const signupHandler = async (e) => {
    try {
      e.preventDefault();
      setLoader(true)
      await createUserWithEmailAndPassword(auth,formValue.email,formValue.password);
      await updateProfile(auth.currentUser,{displayName:formValue.fullname})
      navigate('/')
    } catch (err) {
      setIsError(err.message)
    } finally {
      setLoader(false)
    }

  };
    const [Passwordtype, setPasswordType] = useState('password')
    return (
      <div className="grid md:grid-cols-2 md:h-full md:overflow-hidden animate__animated animate__fadeIn">
        <div>
          <img
            src="/images/signup.jpg"
            className="w-full object-cover h-48 md:h-full"
          />
        </div>
        <div className="flex flex-col md:p-16 p-8">
          <h1 className="font-bold text-4xl">New User</h1>
          <p className="text-gray-600 text-lg">
            Create Your Account to start Shopping
          </p>
          <form onSubmit={signupHandler} className="mt-4">
            <div className="flex flex-col font-semibold">
              <label className="font-semibold text-lg mb-1">Full Name</label>
              <input
                onChange={changeHandler}
                required
                type="text"
                name="fullname"
                placeholder="Enter Your Name"
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col font-semibold">
              <label className="font-semibold text-lg mb-1">Email</label>
              <input
                onChange={changeHandler}
                required
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col font-semibold relative">
              <label className="font-semibold text-lg mb-1">
                Enter Password
              </label>
              <input
                onChange={changeHandler}
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
            {loader ? (
              <p className="p-2 mt-4 font-semibold  rounded bg-black text-white text-lg text-center w-full">
                Loading...
              </p>
            ) : (
              <button
                type="submit"
                className="p-2 mt-4 font-semibold cursor-pointer hover:bg-[#007DFE] hover:text-[#1A2E35] rounded bg-black text-white text-lg text-center w-full"
              >
                SignUp
              </button>
            )}
          </form>
          <div className="mt-2">
            Already have an account{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Signin
            </Link>
          </div>
          {error && (
            <div className="flex justify-between items-center mt-2 p-2 bg-rose-600 rounded shadow text-white text-center font-semibold animate__animated animate-pulse">
              <p className="w-11/12">{error}</p>
              <button onClick={() => setIsError(null)}>
                <i className="ri-close-circle-fill cursor-pointer text-2xl"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Signup