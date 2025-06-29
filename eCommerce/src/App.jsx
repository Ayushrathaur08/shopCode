import "remixicon/fonts/remixicon.css";
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Admin from './components/Admin/LayOut'
import NotFound from './components/NotFound'
import Orders from './components/Admin/Orders'
import Products from "./components/Admin/Products";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products/>}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
