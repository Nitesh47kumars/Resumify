import React from 'react'
import Header from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutSection from '../Components/About/AboutSection'
import Features from '../Components/Features/Features'
import TemplatesSection from '../Components/Template/Template'
import Footer from '../Components/Footer/Footer'
import BlinkingText from './BlinkingText'

const Homepage = () => {
  return (
    <>
      <Header/>
      <BlinkingText
        text="This project is still a work in progress —  Some Components may create issues at the moment."
        className="bg-black py-2 w-full"
      />
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
