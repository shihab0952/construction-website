import React from 'react'
import Hero from './section/Hero'
import Service from './section/Service'
import About from './section/About'
import Portfolio from './section/Portfolio'
import Working from './section/Working'
import Testimonial from './section/Testimonial'
import Contact from './section/Contact'
import Header from './section/Header'
import Footer from './section/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
       <About/>
       <Service/>
       <Portfolio/>
       <Working/>
       <Testimonial/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
