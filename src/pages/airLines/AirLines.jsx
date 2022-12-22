import React from 'react'
import Navbar from '../../components/Navbar'
import garuda from '../../assets/garuda.png'
import { Link } from 'react-router-dom'

const AirLines = () => {
  return (
    <div>
        <div>
        <div>
            <Navbar tittle='Add Airlines' link='/add-airlines' />
        </div>

        {/* Content  */}
        <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>List Airlines :</p>
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Airlines</p>
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
                <div className="tittle border border-b-8 border-t-8 py-3 w-4/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Detail</p>
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
                <div className="tittle grid border py-3 w-4/12">
                    <img src={garuda} alt="icon" className='w-[20rem] mx-auto' />
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <Link to={'/detail-airline'} className='mx-auto my-auto'><p className='text-xl font-semibold text-[#2395FF]'>Detail</p></Link>
                </div>
            </div>
        </div>
        {/* Content  */}

    </div>
    </div>
  )
}

export default AirLines