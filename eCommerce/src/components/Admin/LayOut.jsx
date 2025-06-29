import React, { useState } from "react";
import Products from './Products'
import {Link} from "react-router-dom"
const Admin = ({ children }) => {
  const [size, setSize] = useState(280)
  const [accountMenu,setAccountMenu]=useState(false)
  return (
    <div>
      <aside
        className="fixed h-full bg-indigo-500 text-4xl top-0 left-0 text-center"
        style={{ width: size, transition: "0.3s" }}
      >
        <div className="w-100px">
          <Link to="/admin/products" className="p-4 w-[100px] text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-slate-400">
            <i className="ri-shopping-cart-2-fill mr-2"></i>
            Products
          </Link>
        </div>
      </aside>
      <section
        className="h-screen bg-gray-500 text-white"
        style={{ marginLeft: size, transition: "0.3s" }}
      >
        <nav className="bg-white p-6 shadow text-black sticky top-0 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button
              className="bg-grey-50 hover:bg-indigo-600  hover:text-white w-8 h-8 cursor-pointer"
              onClick={() => setSize(size === 280 ? 0 : 280)}
            >
              <i className="ri-menu-line"></i>
            </button>
            <h1 className="text-md font-semibold">ShopCode</h1>
          </div>
          <div>
            <button
              className="relative cursor-pointer"
              onClick={() => setAccountMenu(!accountMenu)}
            >
              <img src="./images/avt2.jpg" className="h-12 w-12 rounded-full" />
              {accountMenu && (
                <div className="bg-white absolute p-6 shadow-lg w-[200px] top-18 right-0">
                  <div>
                    <h1 className="text-lg font-semibold">Er Ayush Rathaur</h1>
                    <p className="text-gray-500">abc@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4" />
                    <button>
                      <i className="ri-logout-circle-r-line mr-2"></i>
                      LogOut
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-center h-15">{children}</div>
      </section>
    </div>
  );
};

export default Admin;
