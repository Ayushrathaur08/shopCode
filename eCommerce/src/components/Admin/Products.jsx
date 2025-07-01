import React, { useState } from 'react'
import LayOut from './LayOut'

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's Shirt - Blue Denim",
      description:
        "Stylish blue denim shirt made with premium cotton blend. Perfect for casual and semi-formal occasions.",
      price: 1200,
      discount: 15,
      image: "/products/a01.jpg",
    },
    {
      title: "Women's T-Shirt - Cotton White",
      description:
        "Soft white cotton t-shirt with a classic round neck and short sleeves.",
      price: 600,
      discount: 10,
      image: "/products/a02.jpg",
    },
    {
      title: "Men's Casual Sneakers",
      description:
        "Comfortable and durable sneakers perfect for everyday wear. Breathable mesh with rubber sole.",
      price: 2500,
      discount: 20,
      image: "/products/a03.jpg",
    },
    {
      title: "Women's Handbag - Leather Brown",
      description:
        "Elegant brown leather handbag with adjustable strap and spacious compartments.",
      price: 3000,
      discount: 25,
      image: "/products/a04.jpg",
    },
    {
      title: "Unisex Sunglasses - Black Aviator",
      description:
        "Classic black aviator sunglasses with UV protection lenses.",
      price: 1500,
      discount: 5,
      image: "/products/a05.jpg",
    },
    {
      title: "Men's Shirt - Blue Denim",
      description:
        "Stylish blue denim shirt made with premium cotton blend. Perfect for casual and semi-formal occasions.",
      price: 1200,
      discount: 15,
      image: "/products/a06.jpg",
    },
    {
      title: "Women's T-Shirt - Cotton White",
      description:
        "Soft white cotton t-shirt with a classic round neck and short sleeves.",
      price: 600,
      discount: 10,
      image: "/products/a07.jpg",
    },
    {
      title: "Men's Casual Sneakers",
      description:
        "Comfortable and durable sneakers perfect for everyday wear. Breathable mesh with rubber sole.",
      price: 2500,
      discount: 20,
      image: "/products/a08.jpg",
    },
    {
      title: "Women's Handbag - Leather Brown",
      description:
        "Elegant brown leather handbag with adjustable strap and spacious compartments.",
      price: 3000,
      discount: 25,
      image: "/products/a09.jpg",
    },
    {
      title: "Unisex Sunglasses - Black Aviator",
      description:
        "Classic black aviator sunglasses with UV protection lenses.",
      price: 1500,
      discount: 5,
      image: "/products/a10.jpg",
    },
  ]);
  
  return (
    <LayOut>
      <div className="mt-[1265px]">
        <h1 className="text-xl font-semibold mb-4 ml-2">Product's</h1>
        <div className="md:grid grid-cols-4 gap-8 ">
          {products.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-md">
              <img
                src={item.image}
                className="rounded-t-md w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h1 className="text-black font-semibold">{item.title}</h1>
                <p className="text-gray-600">
                  {item.description.slice(0, 50)}...
                </p>
                <div className="gap-2 flex text-gray-600">
                  <label>
                    ₹{item.price - (item.price * item.discount) / 100}
                  </label>
                  <del className="font-bold">₹{item.price}</del>
                  <label className="text-gray-800">
                    ({item.discount}% Off)
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayOut>
  );
}

export default Products