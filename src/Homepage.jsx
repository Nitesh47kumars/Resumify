import React from 'react'
import Header from './Components/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutSection from './Components/About/AboutSection'
import Features from './Components/Features/Features'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Features/>
    </div>
  )
}

export default Homepage
