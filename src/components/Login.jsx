import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            navigate('/');  // Navigate to the home page after login
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      });
  };

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
    navigate('/'); // Navigate to the home page
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" onClick={handleClickOutside}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            <h3 className="font-bold text-lg text-white">Login</h3>
            <div className='mt-3 text-white'>
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                type='email'
                placeholder='Enter your Email here'
                className='w-80 outline-none border px-3 py-1'
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                type='password'
                placeholder='Enter your password here'
                className='border w-80 outline-none px-3 py-1 rounded-md'
                {...register("password", { required: "This field is required" })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              <br />
              <div className='flex justify-around mt-3'>
                <button type='submit' className='bg-pink-500 rounded-md hover:bg-pink-700 text-white px-3 py-2'>
                  Login
                </button>
                <p>Not registered? {" "} 
                  <Link to="/signup" className="underline cursor-pointer text-blue-400 hover:text-blue-600">
                    Sign up 
                  </Link>
                </p> 
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
