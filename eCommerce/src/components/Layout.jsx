import React from 'react'
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
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
    return (
      <div>
        <nav className="shadow-lg sticky top-0 left-0 bg-white">
          <div className=" w-10/12 mx-auto flex items-center justify-between">
            <img src="/images/logo3.png" className="w-[120px]" />
            <ul className="flex justify-between items-center">
              {menus.map((item, index) => (
                <li>
                  <Link
                    to={item.href}
                    className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <Link className="block mx-2  bg-blue-500 text-md rounded font-semibold text-white text-center hover:bg-rose-600 hover:text-white py-3 px-8">
                Login
              </Link>
              <Link className="block  bg-cyan-500 text-md font-semibold text-white text-center hover:bg-rose-600 hover:text-white py-3 px-10">
                SignUp
              </Link>
            </ul>
          </div>
        </nav>

        <div>{children}</div>

        <footer className="bg-orange-600 py-16 mb-0">
          <div className="w-10/12 mx-auto grid grid-cols-4">
            <div className="space-y-2">
              <h1 className="text-white font-semibold text-2xl">
                Website Links
              </h1>
              <ul className="space-y-2 text-white">
                {menus.map((item, index) => (
                  <div key={index}>
                    <Link to={item.href}>{item.label}</Link>
                  </div>
                ))}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
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
            <div className='pr-8'>
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
      </div>
    );
}

export default Layout