import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Events from './pages/Events/Events'

function App() {

  //https://goodheart.sva.la-studioweb.com/
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/events' element={<Events/>}/>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App