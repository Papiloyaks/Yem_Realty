import React, { useEffect, useState } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import img6 from '../images/new6.jpg'
import Related from './Related';



const FifthBlog = () => {
  useEffect(() => {
    document.title = '5 Reasons Ibadan is a Great Investment Destination'
  }, [])
  return (
    <>
         <div className='lg:mx-60 md:mx-20 mx-14 my-20'>
            <p className='flex'>
            <span className='mt-1'><CiCalendarDate /></span>
            <span>Dec 22, 2023</span>
            </p>
            <h1 className='text-2xl font-bold my-2'>5 Reasons Ibadan is a Great Investment Destination</h1>
            <section className='mb-10'>
                <img src={img6} alt="" />
                <p className='my-6'>
                1. It is evident that every investor wants his/her cash back as quick as possible and for that matter, real estate investment gives the quickest money guarantee.  After investing your money, the first income you may get from making an investment in a property is the rental income.  Some investor are luck and get good locality like city centers, near universities which can he rented by colleges as hostels. Here your rental income will be quite substantial and the profits will be quicker.
                </p>
                <p className='my-6'>
                2. You can also have a good control over your cash flow if you invest in properties in an environment that fetch you rental incomes month after month. If you go through the statistics, rental incomes have always been much greater than the dividend incomes you get by investing in stocks. Of course, in stocks, if you are extremely lucky, a sudden surge in the value of your stocks may get you good returns if you sell the stocks at the most opportune time.
                </p>
                <p className='my-6'>
                3. If you are keen enough, you may have observed that the real estate investments in Ibadan have appreciates to a reasonable extent over a period, in every 3 years, the rental dues doubles depending on the area in which your property is situated. If the property is situated in developed areas like Iyaganku GRA, Alalubosa Estate, Oluyole Estate, Bodija and other areas like that where many developmental projects are coming up, the appreciation will be quite high.
                </p>
                <p className='my-6'>
                4. Let us face it, when it comes to the Largest cities in the world, Ibadan is definitely one, you can never know all the towns or places in Ibadan in 7 days, there are some places that would take you 2 hours to get to from Challenge or the toll gate of the city, Ibadan has one of the Largest Shoprite Mall in West Africa and even the premier University in Nigeria is in Ibadan, Ibadan is another city on its own. Ibadan is definitely a center of attraction- with 90% of all the firsts .
                </p>
                <p className='my-6'>
                5. If you've ever lived in Lagos and Ibadan, you would be quick to point out the expensive social life that hovers around Lagos, almost 50% of people in Lagos live fake lives, but the social life setting that you embrace in Ibadan may never leave you. There are lots of necessary social behaviors in Ibadan, like the small talks, fashion, communication and socialization that run deep in every fibre of Ibadan.
                </p>
                <p className='my-10'>
                However, Property investment can be broadly divided into two categories, namely house investment and land investment. Both types of investment have similar risks but different advantages and disadvantages. While there is no wrong type of investment with respect to property, it is always advisable to understand the pros and cons of these two main categories before actually putting  money into any of these.
                </p>
                <p className='my-10'>
                It is pertinent to note that in both types of investment, namely house and land investment, liquidity can be a problem, at least initially. However, in the long run, it is obvious that both types of investment yield profits. While experts believe that land is a low risk investment as compared to all others, house investment has more advantages when compared to land investment. Firstly, the amount of money that you need to put down to get a mortgage loan for house investment is far less than land investment. In other words, down payment is more when it is land than when it is house, making it easy for people to invest in homes.
                </p>
            </section><hr />
            <Related/>
        </div>
    </>
  )
}

export default FifthBlog