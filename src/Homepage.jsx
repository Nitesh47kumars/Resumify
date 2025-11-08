import React from 'react'
import Header from './Components/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutSection from './Components/About/AboutSection'
import Features from './Components/Features/Features'
import TemplatesSection from './Components/Template/Template'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Features/>
      <TemplatesSection/>
    </div>
  )
}

export default Homepage
