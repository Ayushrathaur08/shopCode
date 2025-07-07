import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import firebaseApp from '../utils/firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const auth=getAuth(firebaseApp)

const Profile = () => {
  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    number: '',
    address: '',
    city: '',
    state: '',
    pincode:''
  })
  const handleFormValue = (e) => {
    const input = e.target;
    const name = input.name; 
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]:value
    })
  }
  const navigate = useNavigate()
  const [session,setSession]=useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(false)
        navigate("/login");
      }
    })
  }, [])
  if (session === null)
    return (
      <div className="w-full fixed h-full bg-gray-100 top-0 left-0 flex justify-center items-center">
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-sky-500"></span>
        </span>
      </div>
    );
    return (
      <Layout>
        <div className="mx-auto shadow-lg  md:my-16 rounded-md p-8 md:w-7/12 border">
          <div className="flex gap-3">
            <i className="ri-user-fill mr-2 text-4xl"></i>
            <h1 className="font-semibold text-3xl ">Profile</h1>
          </div>
          <hr className="my-6" />
          <div className="relative mx-auto w-24 h-24">
            <img src="/images/avt2.jpg" className="rounded-full w-24 h-24" />
            <input
              type="file"
              accept="image/*"
              className="opacity-0 mx-auto absolute top-0 left-0 w-full h-full"
            />
          </div>
          <form className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">FullName</label>
              <input
                onChange={handleFormValue}
                required
                type="text"
                name="fullname"
                className="rounded border border-gray-300 p-2"
                value={session.displayName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Email</label>
              <input
                onChange={handleFormValue}
                required
                type="email"
                name="email"
                className="rounded border border-gray-300 p-2"
                value={session.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Mobile</label>
              <input
                onChange={handleFormValue}
                required
                type="number"
                name="number"
                className="rounded border border-gray-300 p-2"
                value={formValue.number}
              />
            </div>
            <div></div>
            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-lg font-semibold">
                Area/Village/Street
              </label>
              <input
                onChange={handleFormValue}
                required
                type="text"
                name="address"
                className="rounded border border-gray-300 p-2"
                value={formValue.address}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">City</label>
              <input
                onChange={handleFormValue}
                required
                type="text"
                name="city"
                className="rounded border border-gray-300 p-2"
                value={formValue.city}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">State</label>
              <input
                onChange={handleFormValue}
                required
                type="text"
                name="state"
                className="rounded border border-gray-300 p-2"
                value={formValue.state}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Country</label>
              <input
                onChange={handleFormValue}
                required
                type="text"
                name="country"
                className="rounded border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold">Pin Code</label>
              <input
                onChange={handleFormValue}
                required
                type="number"
                name="pincode"
                className="rounded border border-gray-300 p-2"
                value="21029"
              />
            </div>
            <button className="font-semibold bg-rose-600 hover:bg-green-400 cursor-pointer w-fit text-white py-2 items-center px-4">
              <i className="ri-save-2-fill mr-2"></i>
              Save
            </button>
          </form>
        </div>
      </Layout>
    );
}

export default Profile