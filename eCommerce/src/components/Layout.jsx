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
            

        <footer className='bg-orange-600 p-16'>
            <div className='w-10/12 mx-auto'></div>
                
        </footer>
      </div>
    );
}

export default Layout