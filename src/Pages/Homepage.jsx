import React from 'react'
import Header from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutSection from '../Components/About/AboutSection'
import Features from '../Components/Features/Features'
import TemplatesSection from '../Components/Template/Template'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col bg-gray-50 gap-40'>
        <HeroSection/>
        <AboutSection/>
        <Features/>
        <TemplatesSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage
