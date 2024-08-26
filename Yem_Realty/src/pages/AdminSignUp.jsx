import React, { useEffect } from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MdErrorOutline } from "react-icons/md";
import axios from 'axios'



const AdminSignUp = () => {
  let dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  
  // console.log(store);

  useEffect(() => {
    if (store) {
        setValue("Name", store.Name)
        setValue("Email", store.Email)
        setValue("Lastname", store.Lastname)
        setValue("Phone", store.Phone)
    }
  }, [])

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const Schema = yup.object().shape({
    Phone: yup.string().matches(phoneRegExp, 'Invalid phone').required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Email: yup.string().email('Invalid email format').required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Name: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Lastname: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> )
})

const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
  resolver: yupResolver(Schema)
})

const onSubmit = (data) => {
  let form = {...store, ...data}
  dispatch(handleNextStep(form))
  // console.log(form);
}

  
  return (
    <>
        <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[340px]'>
            <h1 className='text-xl font-bold text-red-700 text-center'>Your Info</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">First Name</label><br />
                        <input {...register("Name")} type="text" className={`border border-black h-[30px] rounded w-full mt-3 focus:ring-0 focus:border-black`}/>
                        <p className='text-red-600'>{errors.Name?.message}</p>
                    </div>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Last Name</label><br />
                        <input {...register("Lastname")} type="text" className={`border border-black h-[30px] rounded w-full mt-3 focus:ring-0 focus:border-black`}/>
                        <p className='text-red-600'>{errors.Lastname?.message}</p>
                    </div>

                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Email Address</label><br />
                        <input {...register("Email")} type="text" className={`border border-black h-[30px] mt-3 rounded w-full focus:ring-0 focus:border-black`}/>
                        <p className='text-red-600'>{errors.Email?.message}</p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Phone</label><br />
                        <input {...register("Phone")} type="text" className={`border border-black h-[30px] mt-3 rounded w-full focus:ring-0 focus:border-black`} />
                        <p className='text-red-600'>{errors.Phone?.message}</p>
                    </div>

                    <button type='submit' className='float-right bg-red-500 text-white py-1 px-3 font-bold rounded'>Next</button>
                </form>

        </div>
    </>
  )
}

export default AdminSignUp