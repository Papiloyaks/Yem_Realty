import React, { useEffect } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import img1 from '../images/new1.jpg'
import Related from './Related';


const FirstBlog = () => {

        useEffect(() => {
          document.title = 'The Ultimate Guide to Buying Real Estate'
        }, [])
        
  return (
    <>
        <div className='lg:mx-60 md:mx-20 mx-14 my-20'>
            <p className='flex'>
            <span className='mt-1'><CiCalendarDate /></span>
            <span>Dec 22, 2023</span>
            </p>
            <h1 className='text-2xl font-bold my-2'>The Ultimate Guide to Buying Real Estate</h1>
            <section className='mb-10'>
                <img src={img1} alt="" />
                <h1 className='font-bold text-2xl my-2 mt-10'>Defining your Objective</h1>
                <p>In today's ever-changing market, purchasing real estate remains a solid investment choice. Whether you seek a dream home or a profitable asset, here's a concise guide to navigating the process:</p>
                <h1 className='text-2xl font-bold my-2 mt-10'>Setting a Budget</h1>
                <ol className=''>
                    <li>
                    1. Determine Your Affordability: Calculate your budget, factoring in down payment, taxes, insurance, and maintenance costs.
                    </li>
                    <li className='my-2'>
                    2. Get Your Finances in Order: Boost your credit score, save for a down payment, and organize essential financial documents.
                    </li>
                </ol>
                <h1 className='text-2xl font-bold my-2 mt-10'>Researching the Market</h1>
                <ol>
                    <li>
                    1. Explore Local Trends: Investigate local real estate trends, pricing, and neighbourhood dynamics. Thewinrealty blog is a helpful resource.
                    </li>
                    <li className='my-2'>
                    2. Hiring a Real Estate Agent: Collaborate with a qualified agent for expertise and access to listings.
                    </li>
                </ol>
                <h1 className='my-2 text-2xl font-bold mt-10'>Conducting Due Diligence</h1>
                <ol>
                    <li>
                    1. Securing Financing: If you're securing a mortgage, liaise closely with your lender for a smooth process. A mortgage calculator can help.
                    </li>
                    <li className='my-2'>
                    2. Inspections and Appraisals: Ensure inspections, appraisals, and history checks are thorough.
                    </li>
                </ol>
                <h1 className='font-bold text-2xl mt-10'>Closing the Deal</h1>
                <p className='my-2'>In the words of real estate mogul Donald Trump:</p>
                <p className='italic bg-gray-300 px-1'>"Real estate is at the core of almost every business, and it's certainly at the core of most people's wealth."</p>
                <p  className='my-2'>Real estate is a long-term endeavour, but with diligence and informed decisions, it can provide security and prosperity for your future.</p>
            </section><hr />
            <Related/>
        </div>
    </>
  )
}

export default FirstBlog