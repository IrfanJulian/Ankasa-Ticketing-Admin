import axios from 'axios'
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'

const AddFlight = () => {

  const [photo, setPhoto] = useState()
  const [form, setForm] = useState({
    name: '',
    destination: '',
    departure: '',
    arrived: '',
    price: '',
    class: '',
    gate: '',
    terminal: ''
  })

  const handlePhoto = (e) => {
    const image = e.target.files[0]
    setPhoto(image)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('destination', form.destination)
    formData.append('departure', form.departure)
    formData.append('arrived', form.arrived)
    formData.append('price', form.price)
    formData.append('class', form.class)
    formData.append('gate', form.gate)
    formData.append('terminal', form.terminal)
    formData.append('photo', photo,photo.name)
    console.log(formData);
    const res = await axios.post('https://63a1f7a4ba35b96522ed326e.mockapi.io/flight', formData)
    console.log(res);
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='container mx-auto mt-10'>
        <form onSubmit={handleUpload} className='grid'>
          <p className='text-3xl font-bold mb-5'>Add Flights :</p>
          <input type="text" name='name' onChange={handleChange} value={form.name} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='destination' onChange={handleChange} value={form.destination} placeholder='Destination' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='departure' onChange={handleChange} value={form.departure} placeholder='Departure' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='arrived' onChange={handleChange} value={form.arrived} placeholder='Arrived' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='price' onChange={handleChange} value={form.price} placeholder='Price' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='class' onChange={handleChange} value={form.class} placeholder='Class' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='gate' onChange={handleChange} value={form.gate} placeholder='Gate' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='terminal' onChange={handleChange} value={form.terminal} placeholder='Terminal' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <div className="flex my-10">
            <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
            <input name='photo' onChange={handlePhoto} type="file" className='ml-10' />
          </div>
          <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Add Flight</button>
        </form>
      </div>
    </div>
  )
}

export default AddFlight