import React from 'react'
import Layout from './Layout'

const Contact = () => {
    return (
      <Layout>
        <div className="md:w-6/12 bg-white shadow-lg border md:my-16 mx-auto">
          <img src="/images/contact-us.jpg" />
          <div className="p-8">
            <form>
              <div className="flex flex-col font-semibold">
                <label className="font-semibold text-lg mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  name="fullname"
                  placeholder="Enter Your Name"
                  className="p-3 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col font-semibold">
                <label className="font-semibold text-lg mb-1">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="p-3 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col font-semibold">
                <label className="font-semibold text-lg mb-1">Write Your Message</label>
                <textarea
                  required
                  type="text"
                  name="message"
                  placeholder="Enter Your Message"
                  className="p-3 border border-gray-300 rounded"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="p-2 mt-4 font-semibold cursor-pointer hover:bg-[#007DFE] hover:text-white rounded bg-rose-600 text-white text-lg text-center w-full"
              >
                GetQuote
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
}

export default Contact