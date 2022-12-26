import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

const EditFlight = () => {

  const {id} = useParams()
  const [form, setForm] = useState({
    airlines_id: '',
    origin: '',
    destination: '',
    departure: '',
    arrived: '',
    stock: '',
    price: '',
    code: '',
    terminal: '',
    gate: '',
    type: ''
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    try {
      await axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_URL_EDIT_TICKET}${id}`,
        data: form,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
    <div>
    `<Navbar tittle='Home' link='/home' />
    </div>
    <div className='container mx-auto mt-10'>
      <form onSubmit={handleSubmit} className='grid'>
        <p className='text-3xl font-bold mb-5'>Edit Flights :</p>
          <input type='text' name='airlines_id' onChange={handleChange} placeholder="ID Airlines" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='origin' onChange={handleChange} placeholder="Origin" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='destination' onChange={handleChange} placeholder="Destination" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='time' name='departure' onChange={handleChange} placeholder="Departure" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='time' name='arrived' onChange={handleChange} placeholder="Arrived" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='stock' onChange={handleChange} placeholder="Stock" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='price' onChange={handleChange} placeholder="Price" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='type' onChange={handleChange} placeholder="class" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='code' onChange={handleChange} placeholder="code" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='terminal' onChange={handleChange} placeholder="terminal" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' name='gate' onChange={handleChange} placeholder="gate" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
        <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Edit Flight</button>
      </form>
    </div>
  </div>
  )
}

export default EditFlight