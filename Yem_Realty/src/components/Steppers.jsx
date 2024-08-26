import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep } from '../redux/admin';
import AdminSignUp from '../pages/AdminSignUp';
import AdminSignCont from '../pages/AdminSignCont';
import Summary from '../pages/Summary';
import Address from '../pages/Address';
import Thank from '../pages/Thank';
import Password from '../pages/Password';


const Steppers = ({currentIndex}) => {

  const steps = [
    "Your Info",
    "info contd.",
    "Address",
    "password",
    "Summary"
]
  
  return (
    <>
       <div className='w-full border-4 min-h-screen bg-gray-200'>
            <section className=' lg:my-[25px] md:my-[20%] my-[30%] rounded-xl '>
              <div className='flex flex-row  justify-center rounded-xl'>
                <div className='px-4 shadow-xl bg-white'>
                   {
                    steps.map((items,i)=>(
                      <div key={i} className='flex py-2 lg:w-40 mt-2'>
                                <div className={`${currentIndex === i && 'bg-red-700 text-white' } w-[35px] text-center font-bold flex sm justify-center items-center mt-4 border h-[35px] rounded-full lg:me-2 me-0`}>{i + 1}</div>
                                <div className='hidden lg:block text-center'>
                                {/* <div className='step1 font-bold text-white'>STEP{i + 1}</div> */}
                                <div className='text-black mt-5 font-bold'>{items}</div>
                                </div>
                      </div>
                    ))
                   }
                </div>
                <div className='shadow-xl p-5 lg:h-full bg-white'>
                {currentIndex===0 && <AdminSignUp/>}
                {currentIndex===1 && <AdminSignCont/>}
                {currentIndex===2 && <Address/>}
                {currentIndex===3 && <Password/>}
                {currentIndex===4 && <Summary/>}
                {currentIndex===5 && <Thank/>}
                </div>
              </div>
            </section>
       </div>
    </>
  )
}

export default Steppers