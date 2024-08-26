import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocation } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import contact from '../images/contact.png'


const Contact = () => {
  return (
    <>
        <div className='mt-20 lg:mt-10 md:mt-10'>
            <section className='flex gap-20'>
                <div className='lg:mx-20 lg:my-10 mx-4 '>
                    <div className=''>
                    <h1 className='font-bold text-2xl'>Contact Us</h1>
                    <p className='mt-3 mb-8'>You can reach out to us using the following means below or sign up to monitor your requests.</p>
                    <Link className='text-white p-2 rounded font-bold bg-red-500' to="/client/signup"> Sign Up</Link>
                    </div>
                    <div className='pt-5 mt-10 border-t'>
                        <h1 className='text-xl font-bold'>Contact Information</h1>
                        <p>You can also reach us via any of the channels below.</p>
                        <p className='flex gap-1 my-1'><span className='mt-1 text-red-700'><IoLocation /></span> <span>231 Abiola Street, Moniya, Ibadan, Oyo State</span></p>
                        <p className='flex gap-1 my-1'><span className='mt-1 text-red-700'><FaEnvelope /></span> <span>ibrawhim@gmail.com</span></p>
                        <p className='flex gap-1 my-1'><span className='mt-1 text-red-700'><MdAddCall /></span><span>08111111111</span></p>
                    </div>
                </div>
                <div className='m-5 hidden lg:block md:block me-20'>
                    <img src={contact} alt="" className='rounded img-fluid h-full'  width={600}/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact