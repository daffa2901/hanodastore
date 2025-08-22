'use client';
import { Button } from '@/components/ui/button';
import React from 'react'


function Kontak() {
   var titlesize ="text-5xl"; 
var textsize = "text-base";
const [firstname,setFirstname] = React.useState("");
const [lastname,setLastname] = React.useState("");
const [email,setEmail] = React.useState("");
const [phone,setPhone] = React.useState("");

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  console.log("First Name:", firstname);
  console.log("Last Name:", lastname);
  console.log("Email:", email);
  console.log("Phone Number:", phone);
 
}



  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 py-10 px-12 mx-auto max-w-screen-2xl">
      <div className="w-1/2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-8 flex flex-col items-center justify-center">
        <a href="#">
          <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${titlesize} text-center`}>
        Toko Aulia Kimia
          </h5>
        </a>
        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${textsize} text-center`}>
          Jl. RE Martadinata No.45B, Pamulang Tim., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Hubungi via WhatsApp
          <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
          >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
          </svg>
        </a>
      </div>
      <div className='w-1/2'>
        <form onSubmit={handleSubmit} method="post" className="max-w-md mx-auto mt-8">
          <label htmlFor="First Name" className='text-white'>First name*:</label>
          <input
            type="text"
            id="First Name"
            name="First Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            required
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
          <label htmlFor="Last Name" className='text-white'>Last name*:</label>
          <input
            type="text"
            id="Last Name"
            name="Last Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            required
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
          <label htmlFor="Email" className='text-white'>Email*:</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="Phone Number" className='text-white'>Phone Number*:</label>
          <input
            type="text"
            id="phone number"
            name="phone number"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Phone Number"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        <button className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          Submit
        </button>
        </form>
      </div>
    </div>
  )
}

export default Kontak
