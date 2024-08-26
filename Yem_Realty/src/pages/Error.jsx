import React, { useEffect } from 'react'
import erro from '../images/erro.png'
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'



const Error = () => {
  useEffect(() => {
    document.title = 'Error Page | Yem Realty'
  }, [])
  

  return (
    <>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 py-10'>
            <img src={erro} className='img-fluid flex  mx-auto' width={400} alt="" />
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-2xl mb-2'>Oops, Something Went Wrong</p>
                <Link to="/" className='flex bg-black text-white p-2 rounded'><span className='m-1'><FaHome /></span><span>Home Page</span></Link>
            </div>
        </div>
    </>
  )
}

export default Error