import React from 'react'

import Navbar from '../components/Navbar'
import HomeReal from '../components/HomeReal'
import Features from '../components/features'
import Purchase from '../components/purchase'
import Contact from '../components/contact'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeReal/>
        <Features/>
        <Purchase/>
        <Contact/>
    </div>
  )
}

export default Home