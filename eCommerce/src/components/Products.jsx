import React, { useState } from "react";
import Layout from "./Layout";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Classic Navy Shirt",
      price: 999,
      discount: 30,
      thumbnail: "/products/a01.jpg",
    },
    {
      title: "Slim Fit Casual",
      price: 1299,
      discount: 20,
      thumbnail: "/products/a02.jpg",
    },
    {
      title: "Sky Blue Formal",
      price: 1399,
      discount: 10,
      thumbnail: "/products/a03.jpg",
    },
    {
      title: "Bold Check Shirt",
      price: 1099,
      discount: 35,
      thumbnail: "/products/a04.jpg",
    },
    {
      title: "Plain Blue Denim",
      price: 1499,
      discount: 25,
      thumbnail: "/products/a05.jpg",
    },
    {
      title: "Oxford Cotton Shirt",
      price: 1199,
      discount: 40,
      thumbnail: "/products/a06.jpg",
    },
    {
      title: "Wrinkle-Free Shirt",
      price: 1149,
      discount: 15,
      thumbnail: "/products/a07.jpg",
    },
    {
      title: "Luxury Linen Shirt",
      price: 1899,
      discount: 12,
      thumbnail: "/products/a08.jpg",
    },
    {
      title: "Weekend Comfort",
      price: 1249,
      discount: 18,
      thumbnail: "/products/a09.jpg",
    },
    {
      title: "Limited Edition Blue",
      price: 1599,
      discount: 50,
      thumbnail: "/products/a10.jpg",
    },
  ]);
  
  return (
    <Layout>
      <div>
        <div className="md:p-12 p-8">
          <h1 className="text-3xl font-bold text-center">All Products</h1>
          <p className="w-7/12 mt-2 mb-16 mx-auto text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            fuga unde ab doloremque nesciunt harum itaque perferendis amet alias
            nisi inventore veniam eaque facere quas!
          </p>
          <div className="md:w-10/12 mx-auto md:grid grid-cols-4 gap-16 shadow">
            {products.map((item, index) => (
              <div key={index} className="bg-white  shadow-lg border-white">
                <img src={item.thumbnail} />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <div className="space-x-1">
                    <label className="font-bold text-lg">
                      ₹{item.price - (item.price * item.discount) / 100}
                    </label>
                    <del className="">₹{item.price}</del>
                    <label className="text-gray-600">({item.discount}%)</label>
                  </div>
                  <button className="bg-green-400 mt-4 font-semibold py-2 rounded w-full text-white cursor-pointer">
                    Buy Now
                  </button>
                  <button className="bg-rose-400 mt-2 font-semibold py-2 rounded w-full text-white cursor-pointer">
                    <i className="ri-shopping-cart-fill mr-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
