import React from 'react'
import Navbar from '../../components/Navbar'

const AddAirlines = () => {
  return (
    <div>
    <header>
      <Navbar tittle='List Airlines' link='/airlines' />
    </header>
    <div className='container mx-auto mt-10'>
      <form onSubmit={''} className='grid'>
        <p className='text-3xl font-bold mb-5'>Add AirLines :</p>
        <input type="text" name='name' onChange={''} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" name='class' onChange={''} placeholder='Class Available' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" name='sheats' onChange={''} placeholder='Total Sheats' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <div className="flex my-10">
          <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
          <input name='photo' onChange={''} type="file" className='ml-10' />
        </div>
        <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Add AirLines</button>
      </form>
    </div>
  </div>
  )
}

export default AddAirlines