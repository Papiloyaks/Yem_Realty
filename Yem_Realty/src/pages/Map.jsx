import React from 'react'

const Map = () => {
  const key = 'AIzaSyBQR_YLKvALu0BTJDu7A6bEy7OyPLgffvA'
  return (
    <>
        <div className='mw-w-full' style={{width: '100vw'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8069790.435797271!2d8.677456999999999!3d9.0338725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1701082945952!5m2!1sen!2sng" className='w-full' height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
    </>
  )
}

export default Map