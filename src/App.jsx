import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Contact from './pages/Contact'

const App = () => {
  return (

    <div className='font-mono'>
      {/* Navbar always visible */}
      <div className="navbar">
      <Navbar />
      </div>

      {/* Routes for pages */}
      <div className=" ">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App