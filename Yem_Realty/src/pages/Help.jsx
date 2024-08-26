import React from 'react'
import rad from '../images/radiant.svg'
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Help = () => {
    let myBg = {
        backgroundImage: `url(${rad})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
  return (
    <>
        <div>
            <section style={myBg} className='h-[200px] py-20'>
                <h1 className='text-center font-bold text-2xl'>Help Center</h1>
                <p className='text-center'>Find frequently asked questions/tips about Win Realty</p>
            </section>
            <section className='lg:mx-32 md:mx-20 mx-16 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-20 gap-10'>
                <Link to='/joinus' className='border p-2 rounded hover:border-red-700'>
                    <span className='text-red-500 text-xl'><IoHomeOutline /></span>
                    <h1 className='my-2 font-bold text-xl'>Getting Started</h1>
                    <p>Purchase and manange properties</p>
                </Link>
                <Link to='/adminsignin' className='border p-2 rounded hover:border-red-700'>
                    <span className='text-red-500 text-xl'><IoSettingsOutline /></span>
                    <h1 className='my-2 font-bold text-xl'>Account</h1>
                    <p>Manage your Yem Realty account</p>
                </Link>
                <Link to='/contact' className='border p-2 rounded hover:border-red-700'>
                    <span className='text-red-500 text-xl'><FaRegEnvelope /></span>
                    <h1 className='my-2 font-bold text-xl'>Contact Us</h1>
                    <p>Get in touch with our support team</p>
                </Link>
                <Link to='/termsandconditions' className='border p-2 rounded hover:border-red-700'>
                    <span className='text-red-500 text-xl'><GiTempleGate /></span>
                    <h1 className='my-2 font-bold text-xl'>Legal</h1>
                    <p>Read Our Terms and Conditions</p>
                </Link>
            </section>
        </div>
    </>
  )
}

export default Help