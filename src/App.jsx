import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Components/NavBar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Slider from './Components/Slider/SliderPrueba';
import Home from './Components/Home/Home';
function App() {

  return (
    <Router>
      
                <Navbar />
        <Routes>
        <Route path="/" exact element={<Footer />} />
        <Route path='/slider' exact element={<Slider/>}/>
        <Route path='/home' exact element={<Home/>}/>

        </Routes>
        
      </Router>
  )
}

export default App
