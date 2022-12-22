import React from 'react'
import Navbar from '../../../components/Navbar'

const EditFlight = () => {
  return (
    <div>
    <header>
      <Navbar />
    </header>
    <body className='container mx-auto mt-10'>
      <form action="" className='grid'>
        <p className='text-3xl font-bold mb-5'>Edit Flights :</p>
        <input type="text" placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Destination' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Departure' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Arrived' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Price' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Class' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Gate' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" placeholder='Terminal' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <div className="flex my-10">
          <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
          <input type="file" className='ml-10' />
        </div>
        <button className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Edit Flight</button>
      </form>
    </body>
  </div>
  )
}

export default EditFlight