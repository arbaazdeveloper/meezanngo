import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Events from './pages/Events/Events'
import LearnMore from './pages/LearnMore/LearnMore'
import Donation from './pages/Donation/Donation'


function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [pathname])
  //https://goodheart.sva.la-studioweb.com/
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/events' element={<Events />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/learnmore/:type/:id' element={<LearnMore />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
