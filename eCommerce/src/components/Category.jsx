import React, { useState } from 'react'
import Layout from './Layout'

const Category = () => {
  const [category, setCategory] = useState([
    {
      title: "Electronic",
    },
    {
      title: "Fashion",
    },
    {
      title: "SmartPhone",
    },
    {
      title: "Furniture",
    },
    {
      title: "Men's",
    },
    {
      title: "Women's",
    },
    {
      title: "Kid's",
    },
    {
      title: "Electronic",
    },
  ]);
  return (
    <Layout>
      <div className="md:p-16 p-8">
        <div className=" w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8">
          {category.map((item, index) => (
            <div key={index} className="bg-white shadow-lg flex flex-col border cursor-pointer hover:bg-orange-600 hover:text-white rounded-lg justify-center items-center">
              <i className="ri-menu-search-line text-6xl"></i>
              <h1 className="font-bold text-2xl">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Category