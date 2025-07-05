import "remixicon/fonts/remixicon.css";
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import "animate.css";
import LayOut from './components/Admin/LayOut'
import NotFound from './components/NotFound'
import Orders from './components/Admin/Orders'
import AdminProducts from "./components/Admin/Products";
import DashBoard from './components/Admin/DashBoard'
import Customers from "./components/Admin/Customers";
import Settings from "./components/Admin/Settings";
import Payments from "./components/Admin/Payment";
import Home from './components/Home'
import Products from "./components/Products";
import Category from "./components/Category";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="dashboard" element={<DashBoard />}></Route>
            <Route path="setting" element={<Settings />}></Route>
            <Route path="customers" element={<Customers />}></Route>
            <Route path="payments" element={<Payments />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
