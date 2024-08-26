import React from 'react'
import kolapo from '../images/kolapo.jpg'
import jericho from '../images/jericho.jpg'
import legacy from '../images/legacy4.webp'
import aero from '../images/Aerodrome.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Ago from '../images/Ago.jfif'
import iya from '../images/iya.jpeg'

const Estates = () => {
    const estates = [
        {
          name: 'Kolapo Ishola',
          location: 'Akobo/Ibadan',
          img: kolapo
        },
        {
          name: 'Jericho',
          location: 'Jericho/Ibadan',
          img: jericho
        },
        {
          name: 'Aerodrome',
          location: 'Samonda/Ibadan',
          img: aero
        },
        {
          name: 'Legacy',
          location: 'Akobo/Ibadan',
          img: legacy
        },
        {
            name: 'Agodi GRA',
            location: 'Agodi/Ibadan',
            img: Ago
          },
          {
            name: 'Iyaganku GRA',
            location: 'Iyaganku/Ibadan',
            img: iya
          },
      ]
      let myStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
      }
  return (
    <>
        <div className='my-20'>
        <section>
              <h1 className='text-center text-2xl font-bold'>Explore Yem Realty Estates</h1>
              <p className='text-center mb-10'>Check out the latest estates available on Win Realty.</p>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 mx-5 relative' style={{zIndex:'-1'}}>
              {
                estates.map((item, index)=>(
                  <Link to='' key={index} className='border h-[250px] border-black rounded relative  shadow-xl' style={myStyle}>
                    <img src={item.img} className='w-[100%]  opacity-70 h-full' alt=""/>
                    <div className='text-center absolute top-[50%] left-[50%]' style={{transform: 'translate(-50%, -50%)'}}>
                    <div className='font-bold text-2xl text-white'>{item.name}</div>
                    <div className='flex font-bold gap-1 text-white'><span className='mt-1'><IoLocationOutline /></span><span>{item.location}</span></div>
                    </div>
                  </Link>
                ))
              }
              </div>
            </section>
        </div>
    </>
  )
}

export default Estates