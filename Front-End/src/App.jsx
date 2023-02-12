import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div >

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
       <Footer/>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
