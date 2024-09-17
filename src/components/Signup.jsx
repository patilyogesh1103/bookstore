import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";   
  //here Navigate() was not working so useLocation and useNavigate() are used 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Apply the theme on component mount
  //use for changing toggle mode without this, code is not working
  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen dark:bg-slate-900 dark:text-white bg-slate-200 text-black">
        <div className="w-[600px] h-auto">
          <div className="modal-box mt-20 dark:bg-slate-700 dark:text-white text-black bg-slate-200">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg py-2">Sign up</h3>

              <div className='mt-3'>
                <label>Name</label><br />
                <input
                  type='text'
                  placeholder='Enter your name here'
                  className='mt-2 w-80 outline-none px-3 py-2'
                  {...register('fullname', { required: "This field is required" })}
                />
                <br></br>
                {errors.fullname && <span className='text-red-500'>{errors.fullname.message}</span>}
              </div>

              <div className='mt-3'>
                <label>Email</label><br />
                <input
                  type='email'
                  placeholder='Enter your Email here'
                  className='mt-2 w-80 outline-none px-3 py-2'
                  {...register("email", { required: "This field is required" })}
                />
                <br></br>
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
              </div>

              <div className='mt-3'>
                <label>Password</label><br />
                <input
                  type='password'
                  placeholder='Enter your password here'
                  className='mt-2 w-80 outline-none px-3 py-2'
                  {...register("password", { required: "This field is required" })}
                />
                <br></br>
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
              </div>

              <div className='flex justify-around mt-3'>
                <button type='submit' className='bg-pink-500 rounded-md hover:bg-pink-700 text-white px-3 py-2'>
                  Sign up
                </button>
                <p>
                  Have an account?{' '}
                  <Link to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
