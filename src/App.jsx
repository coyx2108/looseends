import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar'
import MainContent from '../containers/MainContent'
import Footer from '../components/Footer'
import References from '../containers/References'
import SendLetter from '../containers/SendLetter'

function App() {

  return (
    <>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/references" element={<References />} />
          <Route path="/send-letter" element={<SendLetter />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  )
}

export default App
