import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
// import garuda from '../../assets/garuda.png'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataAirlines, getDataAirlines } from '../../config/redux/action/airlinesAction'
import PopupDelete from '../../components/popupDelete'

const AirLines = () => {

    const dispatch = useDispatch()
    const { dataAirlinesResult } = useSelector((state)=> state.airlines)
    // const payload = dataAirlinesResult.data
    // console.log(payload);
    useEffect(()=>{
        dispatch(getDataAirlines());
    }, [dispatch])

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
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Name</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Phone</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-4/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Delete</p>
                </div>
            </div>
            {dataAirlinesResult ? dataAirlinesResult.data.map((airlines)=>
            <div className="list flex" key={airlines.id}>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{airlines.id}</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <p className='text-xl my-auto text-center'>{airlines.name}</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>{airlines.phone}</p>
                </div>
                <div className="tittle grid border py-3 w-4/12">
                    <img src={airlines.photo} alt="icon" className='w-[10rem] h-[10rem] mx-auto' />
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <PopupDelete onClick={()=>dispatch(deleteDataAirlines(airlines.id))} />
                </div>
            </div>
            ) : <p className='text*4xl font-bold'>. . .Loading</p>}
        </div>
        {/* Content  */}

    </div>
    </div>
  )
}

export default AirLines