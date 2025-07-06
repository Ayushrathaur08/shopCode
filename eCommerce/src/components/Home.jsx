import React, { useState } from 'react'
import Layout from './Layout'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const Home = () => {
  const [products, setProducts] = useState([
    {
      title: "Navy Blue Classic Shirt",
      price: 999,
      discount: 15,
      thumbnail: "/products/a01.jpg",
    },
    {
      title: "Light Blue Casual Shirt",
      price: 1099,
      discount: 10,
      thumbnail: "/products/a02.jpg",
    },
    {
      title: "Denim Look Shirt",
      price: 1299,
      discount: 20,
      thumbnail: "/products/a03.jpg",
    },
    {
      title: "Checked Blue Shirt",
      price: 1199,
      discount: 45,
      thumbnail: "/products/a04.jpg",
    },
    {
      title: "Striped Office Shirt",
      price: 1399,
      discount: 25,
      thumbnail: "/products/a05.jpg",
    },
    {
      title: "Oxford Cotton Shirt",
      price: 1249,
      discount: 35,
      thumbnail: "/products/a06.jpg",
    },
    {
      title: "Sky Blue Formal Shirt",
      price: 1149,
      discount: 15,
      thumbnail: "/products/a07.jpg",
    },
    {
      title: "Premium Linen Shirt",
      price: 1800,
      discount: 8,
      thumbnail: "/products/a08.jpg",
    },
    {
      title: "Weekend Vibe Shirt",
      price: 1300,
      discount: 5,
      thumbnail: "/products/a09.jpg",
    },
    {
      title: "Royal Blue Limited Edition",
      price: 1500,
      discount: 50,
      thumbnail: "/products/a10.jpg",
    },
  ]);
  
  return (
    <Layout>
      <div>
        <header className="-z-10 relative">
          <Swiper
            style={{ height: "400px", width: "100%" }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
          >
            <SwiperSlide>
              <img src="/images/pic1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/pic7.jpg" />
            </SwiperSlide>
          </Swiper>
        </header>
        <div className="md:p-12 p-8">
          <h1 className="text-3xl font-bold text-center">Latest Product</h1>
          <p className="md:w-7/12 mt-2 mb-16 mx-auto text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            fuga unde ab doloremque nesciunt harum itaque perferendis amet alias
            nisi inventore veniam eaque facere quas!
          </p>
          <div className="w-10/12 mx-auto md:grid grid-cols-4 gap-16 shadow">
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
}

export default Home