import React from 'react'
import img4 from '../images/new4.jpg'
import img6 from '../images/new6.jpg'
import { Link } from 'react-router-dom'


const Related = () => {
  return (
    <>
        <div className='my-20'>
            <section>
                <h1 className='font-bold text-2xl my-2'>Related Posts</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                    <Link>
                        <img src={img4} className=' rounded' alt="" />
                        <h1 className='font-bold my-1'>2022 Outlook: Experts Optimistic, Predict 2.9% Real estate growth</h1>
                        <p>Notwithstanding heightened uncertainty and affordability challenges, experts are optimistic of improvement in the sector this year.</p>
                    </Link>
                    <Link>
                        <img src={img6} className=' rounded' alt="" />
                        <h1 className='font-bold my-1'>5 Reasons Port Harcourt is a Great Investment Destination</h1>
                        <p>The city of Port Harcourt is one of the fastest growing cities in Africa and the Global South.</p>
                    </Link>
                </div>
            </section>
        </div>
    </>
  )
}

export default Related