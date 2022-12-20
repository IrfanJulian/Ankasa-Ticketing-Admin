import React from 'react'
import logo from '../../../assets/logo.png'
import logo2 from '../../../assets/logo2.png'

const Login = () => {
  return (
    <div className='flex'>
        <div className="wrapper grid w-7/12 h-screen bg-[#2395FF]">
          <img src={logo} alt="logo" className='mx-auto my-auto' />
        </div>
        <div className="wrapper w-5/12 h-screen px-44 py-28">
          <div className="logo flex">
            <img src={logo2} alt="logo" className='w-[5rem] h-[3rem]' />
            <p className='text-3xl font-bold my-auto ml-7'>Ankasa</p>
          </div>
          <p className='text-4xl font-bold mt-28'>Login</p>
          <form action="" className='mt-5'>
            <input type="email" placeholder='Email' className='text-lg outline-none py-5 border-b-2 border-[#D2C2FFAD] w-full mt-5' />
            <input type="password" placeholder='Password' className='text-lg outline-none py-5 border-b-2 border-[#D2C2FFAD] w-full mt-5' />
          </form>
        </div>
    </div>
  )
}

export default Login