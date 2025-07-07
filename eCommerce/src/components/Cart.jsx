import React, { useState } from 'react'
import Layout from './Layout'

const Cart = () => {
  const [products, setProducts] = useState([
    {
      item: "Nokia 2700",
      price: "2700",
      discount: 15,
      image: "/products/a01.jpg",
    },
    {
      item: "Samsung Galaxy M12",
      price: "10499",
      discount: 20,
      image: "/products/a02.jpg",
    },
    {
      item: "Redmi Note 10",
      price: "12499",
      discount: 18,
      image: "/products/a03.jpg",
    },
    {
      item: "Realme Narzo 50A",
      price: "9999",
      discount: 25,
      image: "/products/a04.jpg",
    },
    {
      item: "iPhone SE",
      price: "34999",
      discount: 10,
      image: "/products/a05.jpg",
    },
    {
      item: "OnePlus Nord CE 2",
      price: "23999",
      discount: 12,
      image: "/products/a06.jpg",
    },
  ]);
  
    return (
      <Layout>
        <div className="md:w-7/12 bg-white shadow-md rounded p-8 mx-auto md:my-16">
          <div className="flex gap-4 items-center">
            <i className="ri-shopping-cart-fill text-4xl"></i>
            <h1 className="text-4xl font-bold">Your Cart</h1>
          </div>
          <hr className="my-6" />
          <div className="space-y-12">
            {products.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img src={item.image} className="w-[100px] border-3 border-white shadow" />
                <div>
                  <h2 className="font-semibold text-lg capitalize">
                    {item.item}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="space-x-2">
                      <label className="font-semibold text-lg">
                        ₹{item.price - (item.discount * item.price) / 100}
                      </label>
                      <del className="font-bold text-lg">₹{item.price}</del>
                      <label className="text-gray-500">
                        {item.discount}% Discount
                      </label>
                    </div>
                    <button className="bg-rose-600 rounded w-fit cursor-pointer px-4 py-2 font-semibold text-white item-center">
                      <i className="ri-delete-bin-fill mr-2  text-2xl"></i>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <hr className="my-6" />
            <div className='flex justify-between items-center'>
            <h1 className="font-semibold text-2xl">Total: ₹10,0000</h1>
            <button className="bg-green-600 rounded cursor-pointer px-12 py-3 font-semibold text-white item-center font-semibold hover:bg-rose-600">
              <i className="ri-shopping-bag-4-fill mr-2 text-2xl"></i>
              Buy Now
            </button>

            </div>
          </div>
        </div>
      </Layout>
    );
}

export default Cart