import React, { useEffect } from 'react'
import { blogList } from './BlogList'
import { Link } from 'react-router-dom'



const Blogs = () => {
        useEffect(() => {
          document.title = 'Blog | Yem Realty'
        }, [])
  return (
    <>
        <div className='lg:mx-24 md:mx-20 mx-10 my-28'>
            <h1 className='font-bold text-2xl text-center'>News Room</h1>
            <p className='text-center my-3'>Read insightful stories about Real Estate and housing in Nigeria.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-10'>
                {
                    blogList.map((items,index)=>(
                        <Link to={items.li} key={index} className=''>
                            <img src={items.img} className='h-1/2 w-full rounded' alt="" />
                            <div className='font-bold my-1'>{items.headline}</div>
                            <div>{items.paragraph}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Blogs