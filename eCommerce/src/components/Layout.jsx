import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import firebaseApp from "../utils/firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);


const Layout = ({ children }) => {
  const [accountMenu,setAccountMenu]=useState(false)
  const [session, setSession] = useState(null)
   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       
       if (user) {
         setSession(user)
        
       } else {
         setSession(false)
      }
    })
  },[])
  const [open, setOpen] = useState(false)
  const mobileLink = (href) => {
    navigate(href)
    setOpen(false)
  }
  const navigate = useNavigate()
    const menus = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
      {
        label: "Category",
        href: "/category",
      },
  ];
  if(session===null)
    return (
      <div className="w-full fixed h-full bg-gray-100 top-0 left-0 flex justify-center items-center">
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-sky-500"></span>
        </span>
      </div>
    );
    return (
      <div>
        <nav className=" shadow-lg sticky top-0 left-0 bg-white">
          <div className=" w-10/12 mx-auto flex items-center justify-between">
            <img src="/images/logo3.png" className="w-[120px]" />
            {/* for mobile view */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <i className="ri-menu-2-line text-3xl"></i>
            </button>
            <ul className="hidden md:flex  justify-between items-center">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {!session && (
                <>
                  <Link
                    to="/login"
                    className="block mx-2  bg-blue-500 text-md rounded font-semibold text-white text-center hover:bg-rose-600 hover:text-white py-3 px-8"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block  bg-cyan-500 text-md font-semibold text-white text-center hover:bg-rose-600 hover:text-white py-3 px-10"
                  >
                    SignUp
                  </Link>
                </>
              )}
              {session && (
                <div
                  className="relative"
                  onClick={() => setAccountMenu(!accountMenu)}
                >
                  <img
                    src="/images/avt2.jpg"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  {accountMenu && 
                    <div className="flex flex-col items-start animate__animated animate__fadeIn  w-[150px] h-[150px] py-3 bg-white absolute shadow-lg bottom-0 top-12 right-0 ">
                      <Link
                        to="/profile"
                        className="hover:bg-gray-100 w-full text-left p-2"
                      >
                        <i className="ri-user-line mr-2"></i> My Profile
                      </Link>

                      <Link
                        to="/cart"
                        className="hover:bg-gray-100 w-full text-left p-2"
                      >
                        <i className="ri-shopping-cart-fill mr-2"></i>Cart
                      </Link>
                      <button
                        onClick={()=>signOut(auth)}
                        className="hover:bg-gray-100 w-full text-left p-2"
                      >
                        <i className="ri-logout-circle-r-line mr-2"></i> LogOut
                      </button>
                    </div>
                  }
                </div>
              )}
            </ul>
          </div>
        </nav>

        <div>{children}</div>

        <footer className="bg-orange-600 py-16 mb-0">
          <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
            <div className="space-y-2">
              <h1 className="text-white font-semibold text-2xl">
                Website Links
              </h1>
              <ul className="space-y-2 text-white">
                {menus.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
                {!session && (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">SignUp</Link>
                    </li>
                  </>
                )}
                {session && (
                  <li className="text-black">Hi , {session.email}</li>
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="text-white font-semibold text-2xl">Follow Us</h1>
              <ul className="space-y-2 text-white">
                <li>
                  <Link to="/">FaceBook</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
                <li>
                  <Link to="/">Linkdln</Link>
                </li>
                <li>
                  <Link to="/">X</Link>
                </li>
              </ul>
            </div>
            <div className="pr-8">
              <h1 className="text-white font-semibold text-2xl">Brand Deals</h1>
              <p className="text-gray-100 mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                aut eum voluptate, asperiores culpa molestias cum amet natus.
              </p>
              <img src="/images/logo3.png" className="w-[120px]" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-2xl">Contact Us</h1>
              <form action="" className="space-y-2">
                <input
                  required
                  name="name"
                  placeholder="Your Name"
                  className="bg-white w-full rounded p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-white w-full rounded p-2"
                />
                <textarea
                  placeholder="Enter ur message"
                  className="bg-white w-full rounded p-2"
                  rows={3}
                  required
                  name="message"
                />
                <button
                  type="submit"
                  className="bg-black text-white py-3 cursor-pointer w-full rounded text-xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>
        <aside
          className="md:hidden overflow-hidden  bg-slate-900 top-0 left-0 w-[250px] fixed h-full shadow-lg"
          style={{
            width: open ? "250px" : 0,
            transition: "0.3s",
            zIndex: 1,
          }}
        >
          <div
            className="flex flex-col text-white p-8 gap-8"
            style={{
              padding: open ? "2rem" : "0",
              opacity: open ? 1 : 0,
              transition: "padding 0.3s ease, opacity 0.3s ease",
            }}
          >
            {menus.map((item, index) => (
              <button onClick={() => mobileLink(item.href)} key={index}>
                {item.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    );
}

export default Layout