import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footeer from '../components/Footeer'

function Courses() {
  // console.log(list); if this is not commmented then cards in the courses route will never show
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footeer/>
    </>
  )
}

export default Courses