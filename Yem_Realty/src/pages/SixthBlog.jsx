import React, { useEffect } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import img4 from '../images/new4.jpg'
import Related from './Related';


const SixthBlog = () => {
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
                <img src={img4} alt="" />
                <p className='font-bold text-2xl my-2 mt-10'>A lot of people are yet to realize that Real Estate is the future of investments and here’s why;</p>
                <h1 className='font-bold text-xl my-10'>Steady Income </h1>
                <p className='my-5'>The majority of people invest in real estate for the steady flow of cash they earn in the form of rental income. This passive income is a huge incentive to get you started and buy your first rental property. A fast-growing urban area like Etche where the new site of the Rivers State University campus is located is a very mouth-watering investment dump as many business and infrastructural developments are slowly grouping in and very soon it will become a very developed urban area itself and the appreciation in value is mind-blowing, So what are you waiting for?. If chosen wisely, you can secure a steady flow of income for a long time and even save for retirement.</p>

                <p className='my-5'>
                And you do not have to stop investing in one property at a time; you can pick up the pace and invest in multiple rental properties all at once to increase your positive cash flow and diversify your real estate investment portfolio. We are here for you, How? Let me enlighten you, Win Realty can manage your unit with extremely professional property management if you require assistance, We place you at high priority, as our motto goes; Real Estate Made Easy, it’s definitely not just a saying, it’s our way of life. Take advantage of what we offer and join the winning team today. One tip to keep in mind: location, location, location is key to smart real estate investing. Don’t forget we offer prime locations like our Aquaside Estate to get the best out of real estate investments.
                </p>
                <h1 className='font-bold text-xl my-10'>Tax Benefits</h1>
                <p className='my-5'>
                One of the benefits of investing in real estate is the tax exemptions investors get from owning a rental property. This is a major reason why many choose to invest in real estate. For example, rental income is not subject to self-employment tax which means you save more. In addition, the government offers tax breaks for property depreciation, insurance, maintenance repairs, travel expenses, legal fees, and property taxes. Real estate investors are also entitled to lower tax rates for their long-term investments. Icing on the cake! This is very beneficial to you, the trouble you go through with your tax is evaded and efficiently reduced.
                </p>
                <h1 className='font-bold text-xl my-10'>Real Estate Appreciation</h1>
                <p className='my-5'>
                If you already are in real estate investment or are just starting out, you should understand that real estate is not a short-term investment plan. On the contrary, the benefits of investing in real estate include the appreciation of capital assets (for example land) over time. In other words, the value of your property will always increase. For example, in previous years we have seen student-prevalent areas as good investment areas as they are referred to as urban areas, Using the University of Port Harcourt as a case study, a plot of land as of October 2021 was sold at 1.5 million naira, Due to inflation effects over a period of 6 months, the least amount a plot of land can be sold at is 5 million naira and above which is double the initial amount, and these are for cases where the land hasn’t been cultivated or touched.
                </p>
                <p className='my-5'>
                Don’t wait till the opportunity passes you by, make the best of what we’re offering you at our Aquaside Estate property which is currently being sold at 1.5 million as against 450 thousand as of September 2021(that’s more than 300% appreciation in value within 8 months) and it has the capacity to make up to 500% increase in value once it is commissioned before the end of the year. We are ready to meet your Real Estate needs and demands, with our prompt and efficient service Real Estate has never been made easier!
                </p>
                <h1 className='my-10 font-bold text-xl'>Inflation</h1>
                <p className='my-5'>
                One of the benefits of investing in real estate is that it gives you a hedge against inflation. With high inflation, your rental income and property value increase significantly. Real estate investors welcome inflation with open arms because as the cost of living goes up, so does their cash flow.
                </p>
                <h1 className='my-10 font-bold text-xl'>You Are Your Own Decision Maker</h1>
                <p className='my-5'>
                Forget about your 9-5 boring job, the best part about real estate is becoming your own boss. Just like any other business, you have complete autonomy and control over your real estate investment strategies as well as your failures and successes. You call the shots on which property to invest in, the tenants who will live under your roof, how much rental income to charge per month, and who will manage and maintain the property as a whole. The benefits of investing in real estate make you your own decision-maker.
                </p>
                <h1 className='my-10 font-bold text-xl'>Conclusion</h1>
                <p className='my-5'>
                With the five reasons given above, every right-thinking, financially capable aspiring “investor” wouldn’t need further motivation to snap up real estate investment immediately.
                </p>
                <p className='my-5'>
                As part of our core values, we’ve intentionally developed an estate that is perfectly located with enormous profitability in both the short and long term – AQUASIDE ESTATE.
                </p>
                <p className='my-5'>
                Located just a few minutes away from the NEW RIVERS STATE UNIVERSITY CAMPUS EXTENSION at ABARA-ETCHE, PORT HARCOURT and some more universities coming through that axis.
                </p>
                <p className='my-5'>
                We also have some amazing projects in our listings you might like.
                </p>
            </section><hr />
            <Related/>
        </div>
    </>
  )
}

export default SixthBlog