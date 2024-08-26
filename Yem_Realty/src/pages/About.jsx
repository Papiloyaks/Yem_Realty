    import React, { useEffect, useState } from 'react'
import about from '../images/about.jpg'
import { IoHomeSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import pal1 from '../images/pal1.png'
import pal2 from '../images/pal2.png'
import pal3 from '../images/pal3.png'
import pal4 from '../images/pal4.png'
import pal5 from '../images/pal5.png'
import pal6 from '../images/pal6.png'
import pal7 from '../images/pal7.png'
import pal8 from '../images/pal8.png'
import svg1 from '../images/svg.svg'
import svg2 from '../images/svg2.svg'
import svg3 from '../images/svg3.svg'
import svg4 from '../images/svg4.svg'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



const About = () => {
    useEffect(() => {
      document.title = 'About Us | Yem Realty'
    }, [])

    const myTestimony = [
        {
        name: 'Mr Kay B.T',
        testimony: 'Yem Realty exceeded all my expectations, They took the time to understand my goals and preferences, and their in-depth knowledge of the market led me to an opportunity I would not have found on my own',
        img: svg1
        },
        {
         name: 'Mrs Debrah ',
         testimony: 'Yem Realty is not just a real estate company; they are partners in your real estate journey. Their commitment to delivering outstanding results is truly exceptional. If you are looking for a real estate partner you can trust, Win Realty is the way to go',
         img: svg2
        },
        {
         name: 'Mr James Oladayo',
         testimony: 'I have had the pleasure of working with Yem Realty on multiple real estate transactions, and they have consistently demonstrated professionalism, expertise, and a genuine commitment to their client success,',
         img: svg3
        },
        {
        name: 'Miss Bimbo',
        testimony: 'Working with Yem Realty has been a game-changer for me. As a first-time land buyer, I was filled with doubts and uncertainties. But from the moment I connected with their team, I felt supported and informed every step of the way',
        img: svg4
        },
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)
    


    const showPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : myTestimony.length - 1));
      };
    
      const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < myTestimony.length - 1 ? prevIndex + 1 : 0));
      };
    
    

  return (
    <>
        <div className='mx-10 my-10'>
            <h1 className='font-bold mx-auto text-2xl text-center lg:w-[400px] md:w-[400px] w-300px my-5'>We are on a mission to make real estate investment easy & accessible.</h1>
            <img src={about} alt="" width={400}  className='w-screen rounded' />

            <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14 mt-20'>
                <div>
                    <h1 className='text-2xl font-bold'>Our Vision</h1>
                    <p className='font-semibold my-2'>To give 1 million people access to profitable and safe real estate investments before 2030.</p>
                    <p>
                    With the global vision in sight, we've been able to help more 1500 individuals and corporate bodies gain access to safe, profitable and scalable real estate investments in and around Port Harcourt, Nigeria.
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Our Mission</h1>
                    <p className='font-semibold my-2'>To make real estate investment easy & accessible.</p>
                    <p>A customer-centric real estate firm with more than 6 years experience in residential real estate, commercial real estate, construction, project management and REITs.</p>
                </div>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-20'>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><IoHomeSharp /></span>
                    <h1 className='font-bold text-xl'>₦894,000,000</h1>
                    <p>Property Sales</p>
                </div>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><BsPeopleFill /></span>
                    <h1 className='font-bold text-xl'>1230+</h1>
                    <p>Clients Till Date</p>
                </div>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><AiOutlineDollar /></span>
                    <h1 className='font-bold text-xl'>₦225,000,000</h1>
                    <p>Property Returns</p>
                </div>
            </section>
            <section>
            <section className='mx-10 my-20'>
              <h1 className='text-2xl text-center mt-5 font-bold'>Estates & Partners</h1>
              <p className='text-center mb-12'>Over the years, certain companies have trusted our way of doing business</p>
              <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-4 grid-cols-2'>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal1} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal2} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal3} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal4} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal5} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal6} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal7} width={50} alt="" /></div>
                <div className='flex justify-center p-2 rounded' style={{backgroundColor: '#fafafa'}}><img src={pal8} width={50} alt="" /></div>
              </div>
            </section>
            </section>
            <section className='mx-20'>
                <h1 className='text-center font-bold text-2xl'>Testimonials</h1>
                <p className='mx-auto mb-10 mt-2 text-center'>Some people trust us enough to patronzize our business and for that we think they deserve some honourable mentions.</p>
                {
                    myTestimony.map((items, index)=>(
                        <div key={index} style={{display: index===currentIndex? 'block grid' : 'none'}} className='lg:grid-cols-2 md:grid-cols-2 grid-cols-1' >
                            <div className=' flex justify-center items-center flex-col'>
                            <div className='text-justify'>{items.testimony}</div>
                            <div className='font-bold text-xl my-2'>{items.name}</div>
                            <div className='mb-2'>
                            <button className='bg-black text-white me-2 p-1 rounded' onClick={showPrevious}><FaChevronLeft /></button>
                            <button className='bg-black text-white p-1 rounded' onClick={showNext}><FaChevronRight /></button>
                            </div>
                            </div>
                            <div className='  flex justify-center items-center'>
                            <img src={items.img}  className='w-[250px]' alt="" />
                            </div>
                        </div>
                    ))
                }


            </section>
        </div>
    </>
  )
}

export default About