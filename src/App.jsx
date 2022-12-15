import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Components/NavBar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Slider from './Components/Slider/SliderPrueba';
import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';
import WeightLoss from './Components/WeightLoss/WeightLoss';
import Map from './Components/Map/Map.jsx'
import AboutUs from './Components/AboutUs/AboutUs';
import Info from './Components/Info/Info';
function App() {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/footer" exact element={<Footer />} />
        <Route path='/slider' exact element={<Slider />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/cards' exact element={<Cards />} />
        <Route path='/weight' exact element={<WeightLoss />} />
        <Route path='/map' exact element={<Map />} />
        <Route path='/aboutUs' exact element={<AboutUs />} />
        <Route path='/info' exact element={<Info />} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
