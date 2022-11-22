import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Components/NavBar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Slider from './Components/Slider/SliderPrueba';
function App() {

  return (
    <Router>
      
                <Navbar />
        <Routes>
        <Route path="/" exact element={<Footer />} />
        <Route path='/slider' exact element={<Slider/>}/>
        </Routes>
        
      </Router>
  )
}

export default App
