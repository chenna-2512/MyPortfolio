import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from '../Components/Intro'
import Aboutme from '../Components/Aboutme'
import Education from '../Components/Education'
import Interests from '../Components/Interests'
import Projects from '../Components/Projects'

const Home = () => {
  return (
    <div id="home">
      <Navbar/>
      <Intro/>
      <Aboutme/>
      <Education/>
      <Interests/>
      <Projects/>
    </div>
  )
}

export default Home