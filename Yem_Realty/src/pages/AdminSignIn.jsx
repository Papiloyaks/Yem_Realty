import React, { useEffect, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import myLoad from '../images/mylload.gif'




const AdminSignIn = () => {
    const [loader, setLoader] = useState(false)
    const endpoint = 'http://localhost:4232/signin/'
    
    let navigate = useNavigate()

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values)=> {
            setLoader(true)
            console.log(values);
            axios.post(endpoint, values)
            .then((result)=>{
                console.log(result);
                setLoader(false)
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
        })

    })
    // console.log(formik.touched);
  return (
    <>
    <div>
        <section className=''>
            <div className='flex justify-center items-center my-20'>
                <form action="" onSubmit={formik.handleSubmit} className='flex flex-col w-96  p-6 shadow'>
                <h1 className='font-bold '>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded border-red-500 focus:outline-none': 'border-2 p-2 focus:outline-none caret-cyan-400 rounded border-red-700 my-2'} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
                    <input type="text" placeholder='Password' className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-red-700 my-2'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
                    <button type='submit' className='bg-black p-2 rounded flex justify-center text-white'>{loader?<img  src={myLoad} width={20} alt="" /> :  'Sign In'}</button>
                    <div className='flex justify-between my-2'>
                    <Link to="" className=''>Forgot Password?</Link>
                    <Link to="/admin" className=' underline'>Sign Up Here</Link>
                </div>
                </form>
            </div>
        </section>
    </div>
    </>
  )
}

export default AdminSignIn