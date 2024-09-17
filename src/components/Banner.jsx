import React from 'react'
import banner from '/smallBanner.jpg'  //remember like this 

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-36'>
        <div className='space-y-12 '>
        <h1 className='text-4xl font-bold'>
            Hello, Welcome here to learn something <span className='text-pink-500'>new everyday!!! </span> 
        </h1>
        <p className='text-xl'>
        A room without books is like a body without a soul.
        A book is a dream that you hold in your hand. So reading books is a very good habit 
        for everyone
        </p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-secondary">Get Started</button>
        </div>
        
        </div>
        <div className='w-full md:w-1/2'>
        <div className='flex justify-center items-center w-65 h-65 object-cover'>
        <img src={banner} className=" flex justify-center items-center min-l-screen mt-20 mx-20 mr-10 w-90 h-90 object-cover rounded-lg shadow-md" alt='' />

        </div>
        </div>
    </div>
    </>
)
}

export default Banner