import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup'
import imgi from '../images/request.jpg'
import { Link } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";

const Request = () => {
    let formik = useFormik({
        initialValues: {
            fullname: "",
            subject: "",
            email: "",
            description: ""
        },
        onSubmit: (values)=>{
            console.log(values)
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Please Enter Your Full Name</span></span>),
            subject: Yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Please Enter Subject Here</span></span>),
            email: Yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Enter an Email Address</span></span>).email(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Enter a Valid Email Address</span></span>),
            description:  Yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field must not be empty</span></span>)
        })
    })
  return (
    <>
        <div className='lg:mx-32 md:mx-20 mx-10 my-20'>
            <section className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20'>
            <div className=''>
                <h1 className='font-bold text-2xl mt-5 mb-3'>Send Request</h1>
                <p className='my-2'>Do you have any issue with payment, suggestions or you want to book an inspection? Please send us a request.</p>
                <form action="" onSubmit={formik.handleSubmit} className='grid grid-cols-1'>
                    <label htmlFor="Full Name" className='font-bold mt-4'>Full Name:</label>
                    <input  type="text" className={formik.touched.fullname && formik.errors.fullname ? ' p-2 caret-red-400 rounded': 'border-2 p-2 caret-cyan-400 rounded-xl'}  name='fullname' placeholder='Input fullname' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <small className="text-red-500 font-semibold">{formik.touched.fullname && formik.errors.fullname}</small>
                    <label htmlFor="subject" className='font-bold mt-4'>Subject:</label>
                    <input type="text"  className={formik.touched.subject && formik.errors.subject ? ' p-2 caret-red-400 rounded ': 'border-2 p-2 caret-cyan-400 rounded-xl'}  name='subject'  placeholder='Input subject' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className="text-red-500 font-semibold">{formik.touched.subject && formik.errors.subject}</small>
                    <label htmlFor="email" className='font-bold mt-4'>Email:</label>
                    <input type="text"  className={formik.touched.email && formik.errors.email ? ' p-2 caret-red-400 rounded ': 'border-2 p-2 caret-cyan-400 rounded-xl'}  name='email'  placeholder='name@mail.com' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className="text-red-500 font-semibold">{formik.touched.email && formik.errors.email}</small>
                    <label htmlFor="description" className='font-bold mt-4'>Description:</label>
                    <textarea name="" id="description" cols="30" rows="6" className={formik.touched.description && formik.errors.description ? ' p-2 caret-red-400 rounded ': 'border-2 p-2 caret-cyan-400 rounded-xl'}   onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                    <small className="text-red-500 font-semibold">{formik.touched.description && formik.errors.description}</small>
                    <button type='submit' className='bg-black my-2 p-2 text-white font-bold rounded-xl'>Send Request</button>
                </form>
                </div>
                <div className='hidden md:block'>
                    <img src={imgi} alt="" className='h-full rounded' />
                </div>
            </section>
        </div>
    </>
  )
}

export default Request