import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar'
import { addAirlines } from '../../config/redux/action/airlinesAction'

const AddAirlines = () => {
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState([])
  const [form, setForm] = useState({
    name: '',
    phone: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handlePhoto = (e) => {
    const initial = e.target.files[0]
    setPhoto(initial)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('phone', form.phone)
    formData.append('photo', photo, photo.phone)
    dispatch(addAirlines(formData))
  }
  return (
    <div>
    <header>
      <Navbar tittle='List Airlines' link='/airlines' />
    </header>
    <div className='container mx-auto mt-10'>
      <form onSubmit={handleSubmit} className='grid'>
        <p className='text-3xl font-bold mb-5'>Add AirLines :</p>
        <input type="text" name='name' onChange={handleChange} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <input type="text" name='phone' onChange={handleChange} placeholder='Class Available' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
        <div className="flex my-10">
          <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
          <input name='photo' onChange={handlePhoto} type="file" className='ml-10' />
        </div>
        <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Add AirLines</button>
      </form>
    </div>
  </div>
  )
}

export default AddAirlines