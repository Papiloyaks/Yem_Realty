import React from 'react'
import iyin from '../images/iyin.jpg'
import ylogo from '../images/ylogo.png'
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import pass1 from '../images/pass1.jpg'
import pass2 from '../images/pass2.jpeg'
import pass3 from '../images/pass3.jpeg'
import pass4 from '../images/pass4.avif'
import pass5 from '../images/pass5.jpg'
import pass6 from '../images/pass6.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";

const JoinUs = () => {
  return (
    <>
        <div>
            <section className='flex w-full justify-between'>
                <div className='flex flex-col justify-center items-center gap-3 lg:w-1/2 w-full h-screen'>
                <Link to='/' className='flex gap-1'>
                    <span className='mt-1 hover:animate-bounce'><FaArrowLeftLong /></span>
                    <span>Back</span>
                </Link>
                    <img src={ylogo}  width={40} alt="" />
                    <h1 className='text-2xl font-bold'>Get started with Win Realty</h1>
                    <p className='text-xl'>Are you looking to buy or sell a property?</p>
                    <div className='flex flex-col gap-3'>
                    <Link to='/client/signup'  className='flex gap-2 border px-2 py-3 rounded hover:border-yellow-400'>
                        <div className='flex items-center'>
                            <img src={pass1} width={30} className='h-[25px] rounded-full' alt="" />
                            <img src={pass2} width={30} className='h-[25px] rounded-full' alt="" />
                            <img src={pass3} width={30} className='h-[25px] rounded-full' alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>I'm a client</h1>
                            <p className=''><span> i'm looking to buy a property</span></p>
                        </div>
                        <div><span className='mt-5 flex'><IoChevronForward /></span></div>
                    </Link>
                    <Link to='/admin/signup'  className='flex gap-2 border px-2 py-3 rounded hover:border-yellow-400'>
                        <div className='flex items-center'>
                            <img src={pass4} width={30} className='h-[25px] rounded-full' alt="" />
                            <img src={pass5} width={30} className='h-[25px] rounded-full' alt="" />
                            <img src={pass6} width={30} className='h-[25px] rounded-full' alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>I'm a realtor</h1>
                            <p className='flex'><span>i'm looking to sell a property </span></p>
                        </div>
                        <div><span className='mt-5 flex'><IoChevronForward /></span></div>
                    </Link>
                    </div>
                </div>
                <div className='  w-1/2 hidden lg:block'>
                    <img src={iyin} className='w-full h-screen' alt="" />
                </div>
            </section>
        </div>
    </>
  )
}

export default JoinUs