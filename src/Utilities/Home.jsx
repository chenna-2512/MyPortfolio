import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from '../Components/Intro'
import Aboutme from '../Components/Aboutme'
import Education from '../Components/Education'
import Interests from '../Components/Interests'
import Projects from '../Components/Projects'
import Contactme from '../Components/Contactme'

const Home = () => {
  return (
    <div id="home">
      <Navbar/>
      <Intro/>
      <Aboutme/>
      <Education/>
      <Interests/>
      <Projects/>
      <Contactme/>
    </div>
  )
}

export default Home