import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footeer from '../components/Footeer'

function Home() {

  return (
    <>
    <div> 
    <Navbar/>
      <Banner/>
      <Freebook/>
      <Footeer/>
    </div> 
    </>
  )
}

export default Home