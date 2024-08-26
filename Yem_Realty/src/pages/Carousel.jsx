import React, { useState } from 'react'
import main from '../images/1/main.png'
import one from '../images/1/one.png'
import two from '../images/1/two.png'
import three from '../images/1/three.png'
import four from '../images/1/four.png'
import five from '../images/1/five.png'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    let slides = [
        one,two,four,five
    ]

    const prevSlide = () => {
        const firstSlide = currentIndex===0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const lastSlide = currentIndex=== slides.length - 1;
        const newIndex = lastSlide ? 0  : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

  return (
    <>
        <div className='flex max-w-[200px] h-[170px] w-full m-auto relative border'>
            <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
            <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  p-1 cursor-pointer rounded-full bg-black text-white text-2xl'><BsChevronCompactLeft/></div>
            <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-1 cursor-pointer  rounded-full bg-black text-white text-2xl'><BsChevronCompactRight/></div>
            <div className='flex  justify-center py-2 absolute top-[140px] left-[50px]'>
                {
                    slides.map((item, index)=>(
                        <div key={index} onClick={()=> goToSlide(index)} className={currentIndex==index ? 'text-white text-2xl' :'text-2xl cursor-pointer'}><RxDotFilled/></div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Carousel