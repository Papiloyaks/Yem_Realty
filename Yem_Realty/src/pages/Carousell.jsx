import React, { useState } from 'react';
import { carouselList } from './CarouselList';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineChevronLeft, MdChevronRight } from 'react-icons/md';
import { LuDot } from "react-icons/lu";

const Carousell = () => {
  const [carouselIndexes, setCarouselIndexes] = useState(Array(carouselList.length).fill(0));
  // const [myImages, setMyImages] = useState([])

  const prevSlide = (index, slides) => {
    const newIndexes = [...carouselIndexes];
    newIndexes[index] = (newIndexes[index] === 0) ? slides.length - 1 : newIndexes[index] - 1;
    setCarouselIndexes(newIndexes);
    // setMyImages(slides)
  };

  const nextSlide = (index, slides) => {
    const newIndexes = [...carouselIndexes];
    newIndexes[index] = (newIndexes[index] === slides.length - 1) ? 0 : newIndexes[index] + 1;
    setCarouselIndexes(newIndexes);
  };


const goToSlide = (carouselIndex, imageIndex) => {
  const newIndexes = [...carouselIndexes];
  newIndexes[carouselIndex] = imageIndex;
  setCarouselIndexes(newIndexes);
};

  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 mx-5'>
        {carouselList.map((item, index) => (
          <div key={index} className='md:hover:shadow shadow rounded relative h-[300px]'>
            <img src={item.images[carouselIndexes[index]]} className='w-full h-2/3' alt='' />
            <div className='bg-red-500 w-1/2 md:w-2/3 my-2 rounded px-2 text-white font-bold'>
              {item.type}
            </div>
            <div className='text-xl font-bold my-2'> ₦{item.price}</div>
            <div className='flex my-2'>
              <span className='mt-1'>
                <IoLocationOutline />
              </span>
              {item.area}
            </div>
            <button
              onClick={() => prevSlide(index, item.images)}
              className='absolute  top-[35%] bg-gray-200 opacity-70 rounded-full text-black p-1 -translate-x-0 left-2 translate-y-[-50%]'>
              <MdOutlineChevronLeft />
            </button>
            <button
              onClick={() => nextSlide(index, item.images)}
              className='absolute  top-[35%] bg-gray-200 opacity-70 rounded-full text-black p-1 -translate-x-0 right-2 translate-y-[-50%]'>
              <MdChevronRight />
            </button>
            <div className='flex absolute top-[60%] left-[25%]'>
            {item.images.map((image, i) => (
               <span key={i} onClick={()=> goToSlide(index, i)} className={carouselIndexes[index]===i ? 'text-white text-xl' :'text-xl cursor-pointer'}><LuDot /></span>
            ))}
          </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousell;
