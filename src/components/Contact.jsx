import React from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center mt-35 min-h-screen'>
                <div className='w-1/3 h-[450px] dark:bg-slate-800 dark:text-white border-2px bg-white text-black p-6 rounded-lg shadow-lg '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-2xl text-left'>
                            Contact Us
                        </h1><br></br>
                        <div>
                            <span className="mt-3">Name :</span><br></br>
                            <input
                                type='text'
                                placeholder='Please enter your name'
                                className='w-full mt-2'
                                {...register('name', { required: "This field is required" })}
                            />
                            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                        </div>
                        <div className='mt-8'>
                            <span className="mt-3">Email :</span><br></br>
                            <input
                                type='email'
                                placeholder='Please enter your email'
                                className='w-full mt-2'
                                {...register('email', { required: "This field is required" })}
                            />
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                        <div className='mt-8'>
                            <span className="mt-3">Opinion :</span><br></br>
                            <textarea
                                placeholder='Please enter your opinion'
                                className='w-full mt-2'
                                {...register('Message', { required: "This field is required" })}
                            />
                            {errors.Message && <span className='text-red-500'>{errors.Message.message}</span>}
                        </div>
                        <div className='mt-10'>
                            <button type='submit'
                                className='text-semibold bg-pink-500 text-white rounded-md hover:bg-pink-700 px-3 py-1'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
