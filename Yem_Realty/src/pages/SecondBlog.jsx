import React, { useEffect } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import img2 from '../images/new2.jpg'
import Related from './Related';


const SecondBlog = () => {
    useEffect(() => {
        document.title = '4 Sure Ways To Invest In Real Estate Even If You Don’t Have Millions'
      }, [])
  return (
    <>
            <div className='lg:mx-60 md:mx-20 mx-14 my-20'>
            <p className='flex'>
            <span className='mt-1'><CiCalendarDate /></span>
            <span>Dec 22, 2023</span>
            </p>
            <h1 className='text-2xl font-bold my-2'>4 Sure Ways To Invest In Real Estate Even If You Don’t Have Millions</h1>
            <section className='mb-10'>
                <img src={img2} alt="" />
                <p className='my-2'>The idea of only the rich owning lands and properties is false. You too can own lands and properties without millions and here are a few reasons why and how;</p>
                <h1 className='text-2xl font-bold my-2 mt-10'>Partnership</h1>
                <p className='my-5'>Real Estate is by far the best investment choice to make especially in a country with an unstable economy such as ours. And it’s not an option that requires singularity of ownership. Partnerships are really important as they offer the opportunity to invest in real estate despite your current financial Limitations.</p>
                <h1 className='text-2xl font-bold my-2 mt-10'>Population Factor</h1>
                <p className='my-3'>Nigeria is the most populated country in Africa, and it keeps increasing at a rate of 3.2% a year. The U.S. Census Bureau has concluded that at this rate, there will be an estimated 402 million people in Nigeria by the year 2050. The question now is, where will they all live? With this estimation, real estate is primed to be the best investment plan in Nigeria for at least the next 100 years.</p>
                <p className='mb-3'>Join the list of land/homeowners today, it’s an investment that just cannot go wrong. It is about the safest investment in the world.</p>
                <h1 className='my-2 text-2xl font-bold mt-10'>300% Appreciation Value</h1>
                <p className='my-2'>The Return on investment (ROI) on properties in Port Harcourt Nigeria is good but with the Amazing urbanization and commercial developments happening in Etche, they have become exceptionally good and are projected to increase in the coming months.</p>
                <p className='my-2'>A good investor doesn’t just invest, but they invest in a plan with the highest possible ROI and currently real estate properties at Abara in Etche, Port Harcourt are becoming the best options.</p>
                <p className='my-2'>If you wait to buy, you’ll pay more in the future. However, if you buy now, you’ll actually be in the position to make future price increases work for you.</p>
                <h1 className='font-bold text-2xl mt-10'>Flexible Payment</h1>
                <p className='my-2'>Investing in real estate has never been easier with our affordable and well-structured flexible payment plans. With as little as an initial deposit of 200k, you can become a landowner today.</p>
                <p>Take advantage of what we’re offering, the best time is now!</p>
            </section><hr />
            <Related/>
        </div>
    </>
  )
}

export default SecondBlog