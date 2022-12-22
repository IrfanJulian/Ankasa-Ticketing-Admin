import React, { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../../components/Navbar'
import garuda from '../../../assets/garuda.png'
import dlt from '../../../assets/delete.png'
import edit from '../../../assets/edit.png'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

const Home = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async () => {
            try {
                const result = await axios({
                    method: 'GET',
                    url: 'https://63a1f7a4ba35b96522ed326e.mockapi.io/flight'
                })
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

  return (
    <div>
        <div>
            <Navbar tittle='Add Flight' link='/add-flight' />
        </div>

        <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>List Flights :</p>
            <div className="search flex mt-16">
                <input type="text" name='search' placeholder='Search...' className='border-2 py-3 px-5 text-xl font-semibold outline-none rounded-xl' />
                <button className='ml-5 px-2 py-2 bg-[#2395FF] rounded-xl text-white text-xl font-semibold'>Search</button>
            </div>
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Flight</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Name</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Destination</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Departured</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Arrived</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Price</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Class</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Manage</p>
                </div>
            </div>

            <div className="list flex">
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>25</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>Garuda</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>IDN to UEA</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>15.30</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>19.30</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>$ 150.0</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>Business</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <img src={garuda} alt="icon" className='w-[20rem] mx-auto' />
                </div>
                <div className="tittle flex border py-3 w-1/12">
                    <button className='mx-auto' onClick={()=>navigate('/edit-flight')}><img src={dlt} alt="icon" className='w-[2rem] h-[2rem]' /></button>
                    <button className='mx-auto' onClick={()=>navigate('/edit-flight')}><img src={edit} alt="icon" className='w-[2rem] h-[2rem]' /></button>
                </div>
            </div>

            <div className="list flex">
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>25</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>Garuda</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>IDN to UEA</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>15.30</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>19.30</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>$ 150.0</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>Business</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <img src={garuda} alt="icon" className='w-[20rem] mx-auto' />
                </div>
                <div className="tittle flex border py-3 w-1/12">
                    <button className='mx-auto' onClick={()=>navigate('/edit-flight')}><img src={dlt} alt="icon" className='w-[2rem] h-[2rem]' /></button>
                    <button className='mx-auto' onClick={()=>navigate('/edit-flight')}><img src={edit} alt="icon" className='w-[2rem] h-[2rem]' /></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home