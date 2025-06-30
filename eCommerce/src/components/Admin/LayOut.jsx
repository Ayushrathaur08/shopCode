import React, { useState } from "react";
import Products from './Products'
import { Link, useLocation } from "react-router-dom";
const Admin = ({ children }) => {
  const [size, setSize] = useState(280)
  const [mobileSize,setMobileSize]=useState(0)
  const [accountMenu, setAccountMenu] = useState(false)
  const menu = [
    {
      label: "Dashboard",
      icon: <i className="ri-dashboard-3-fill mr-2"></i>,
      link: "/admin/dashboard",
    },
    {
      label: "Customers",
      icon: <i className="ri-user-fill mr-2"></i>,
      link: "/admin/customers",
    },
    {
      label: "Products",
      icon: <i className="ri-shopping-cart-2-fill mr-2"></i>,
      link: "/admin/products",
    },
    {
      label: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      link: "/admin/orders",
    },
    {
      label: "Payments",
      icon: <i className="ri-bank-card-fill mr-2"></i>,
      link: "/admin/payments",
    },
    {
      label: "Settings",
      icon: <i className="ri-tools-fill mr-2"></i>,
      link: "/admin/settings",
    },
   
  ];
  const location = useLocation()
  return (
    <>
      {/* for Desktop View Only */}
      <div className="md:block hidden">
        <aside
          className="fixed h-full bg-indigo-500 text-4xl top-0 left-0 overflow-hidden"
          style={{ width: size, transition: "0.3s" }}
        >
          <div className=" flex flex-col">
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="px-4 py-3 w-[280px] text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-slate-400"
                style={{
                  background:
                    item.link === location.pathname ? "#EC003F" : "transparent",
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <button
              className="px-4 py-3 w-[280px] text-gray-50 text-[17.5px]
                       hover:bg-rose-600 hover:text-slate-400 text-left cursor-pointer"
            >
              <i className="ri-logout-circle-r-line mr-2"></i>
              LogOut
            </button>
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
                <img
                  src="./images/avt2.jpg"
                  className="h-12 w-12 rounded-full"
                />
                {accountMenu && (
                  <div className="bg-white absolute p-6 shadow-lg w-[200px] top-18 right-0">
                    <div>
                      <h1 className="text-lg font-semibold">
                        Er Ayush Rathaur
                      </h1>
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
          <div className="flex items-center justify-center h-15">
            {children}
          </div>
        </section>
      </div>
      {/* //for Mobile View */}
      <div className="md:hidden block">
        <aside
          className="fixed h-full bg-indigo-500 z-50 text-4xl top-0 left-0 overflow-hidden"
          style={{ width: mobileSize, transition: "0.3s" }}
        >
          <div className=" flex flex-col">
            <button className="text-left m-5" onClick={() => setMobileSize(0)}>
              <i className="ri-close-circle-fill cursor-pointer item-left text-white"></i>
            </button>
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="px-4 py-3 w-[280px] text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-slate-400"
                style={{
                  background:
                    item.link === location.pathname ? "#EC003F" : "transparent",
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <button
              className="px-4 py-3 w-[280px] text-gray-50 text-[17.5px]
                       hover:bg-rose-600 hover:text-slate-400 text-left"
            >
              <i className="ri-logout-circle-r-line mr-2"></i>
              LogOut
            </button>
          </div>
        </aside>
        <section
          className="h-screen bg-gray-500 text-white"
          style={{ transition: "0.3s" }}
        >
          <nav className="bg-white p-6 shadow text-black sticky top-0 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <button
                className="bg-grey-50 hover:bg-indigo-600 text-left  hover:text-white w-8 h-8 cursor-pointer"
                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
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
                <img
                  src="./images/avt2.jpg"
                  className="h-12 w-12 rounded-full"
                />
                {accountMenu && (
                  <div className="bg-white absolute p-6 shadow-lg w-[200px] top-18 right-0">
                    <div>
                      <h1 className="text-lg font-semibold">
                        Er Ayush Rathaur
                      </h1>
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
          <div className="flex items-center justify-center h-15">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
