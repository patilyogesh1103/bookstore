import React from 'react'
import Home from './Home/Home'
// import Courses from './components/Courses'
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  
  const [authUser,setAuthUser]= useAuth();
  console.log(authUser); 
  return (<>
   <div className='dark:bg-slate-900 dark:text-white bg-white text-black'>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/course' element={ authUser ?<Courses/> :<Navigate to="/signup"/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   <Toaster/>
   </div>

  </>
  
//also keep them in main.jsx in BrowserRouter

)
}

export default App