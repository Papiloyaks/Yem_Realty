import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep, handlePreviousStep } from '../redux/admin'


const Summary = () => {
  const dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  
  const [myProfile, setMyProfile] = useState('')

  useEffect(() => {
    setMyProfile(store)
  }, [])
  
  return (
    <>
        <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[340px]'>
          <section>
            <h1 className='text-center font-bold my-5 text-red-700'>Summary</h1>
            <div>
                <h1 className='font-bold text-xl text-center underline'>Personal Information</h1>
                  <div><span className='font-semibold'>Full Name:</span> {myProfile.Lastname}  {myProfile.Name}</div>
                  <div><span className='font-semibold'>Email:</span> {myProfile.Email}</div>
                  <div><span className='font-semibold'>Phone: </span> {myProfile.Phone}</div>
                  <div><span className='font-semibold'>Date Of Birth:</span>  {myProfile.dob}</div>
                  <div><span className='font-semibold'> Gender:</span> {myProfile.gender}</div>
            </div>
            <div>
                <h1 className='font-bold text-xl text-center underline'>Address</h1>
                <div><span className='font-semibold'>L.G.A:</span> {myProfile.localgovernment}</div>
                <div><span className='font-semibold'>State:</span> {myProfile.state}</div>
                <div><span className='font-semibold'>Country:</span> {myProfile.nationality}</div>
                <div><span className='font-semibold'>Home Address:</span> {myProfile.address}</div>
            </div>
          </section>
          <div className='flex justify-between mt-[10%]'>
            <button className='bg-red-700 p-2 rounded font-bold text-white' onClick={()=>dispatch(handlePreviousStep())}>Go Back</button>
            <button onClick={()=>dispatch(handleNextStep())} className='bg-red-700 p-2 rounded font-bold text-white'>Confirm</button>
          </div>
        </div>
    </>
  )
}

export default Summary