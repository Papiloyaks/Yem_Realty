import React from 'react'
import thank from '../images/thank.svg'
import { Link } from 'react-router-dom'


const Thank = () => {

  return (
    <>
    <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[340px]'>
    <div className=''>
    <img className='mx-auto my-3' src={thank} alt="" />
    <p className='my-3 text-center'>Thank you!</p>
    <p className='text-center'>Thanks you for signing up at Yem real estates, we hope to give our best services to you</p>
    </div>
    <div className='flex justify-center'>
    {/* <button className='underline' onClick={handlePrevious}>Go Back</button> */}
    </div>
    <div className='my-5 flex justify-center'>
      <Link className='text-center underline text-blue-400 hover:text-red-400 font-semibold' to='/adminsignin'>Proceed to Sign In</Link>
    </div>
    </div>
    </>
  )
}

export default Thank