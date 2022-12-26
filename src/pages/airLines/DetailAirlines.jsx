import React from 'react'
import Navbar from '../../components/Navbar'
import garuda from '../../assets/garuda.png'

const DetailAirline = () => {

  return (
    <div>
      <Navbar tittle='List Airlines' link='/airlines' />
      <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>Detail Airline :</p>
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Airline</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Name</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Class Available</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Total Sheats</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-5/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
            </div>

            <div className="list flex">
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>1</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>Garuda</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>Business</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>Sheats</p>
                </div>
                <div className="tittle grid border py-3 w-5/12">
                    <img src={garuda} alt="icon" className='w-[20rem] mx-auto' />
                </div>
            </div>
        </div>

        <div className='container mx-auto mt-36'>
          <form onSubmit={''} className='grid'>
            <p className='text-2xl font-bold mb-5'>Edit :</p>
            <input type="text" name='name' onChange={''} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
            <input type="text" name='class' onChange={''} placeholder='Class Available' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
            <input type="text" name='sheats' onChange={''} placeholder='Total Sheats' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
            <div className="flex my-10">
              <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
              <input name='photo' onChange={''} type="file" className='ml-10' />
            </div>
            <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Edit AirLine</button>
          </form>
        </div>
    </div>
  )
}

export default DetailAirline