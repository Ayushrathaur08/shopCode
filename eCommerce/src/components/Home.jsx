import React from 'react'
import Layout from './Layout'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Home