import React from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ClientSignIn = () => {
    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values)=> {
            console.log(values);
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
        })

    })
  return (
    <>
        <div className=' h-screen py-20'>
        <section className=''>
            <div className='flex justify-center items-center'>
                <form action="" onSubmit={formik.handleSubmit} className='flex flex-col w-96  p-6 shadow'>
                <h1 className=''>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded border-red-500 focus:outline-none': 'border-2 p-2 focus:outline-none caret-cyan-400 rounded border-cyan-800 my-2'} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
                    <input type="text" placeholder='Password' className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800 my-2'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
                    <button type='submit' className='bg-black p-2 rounded text-white'>Sign In</button>
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

export default ClientSignIn