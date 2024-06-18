import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

function Home() {
  return (
    <>
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </>
  )
}

export default Home