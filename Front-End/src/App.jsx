import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer'
import ArticleDetail from './components/ArticleDetail/ArticleDetail'
import JoinForm from './components/JoinForm/JoinForm';
import Donate from './components/Donate/Donate';
import DashBoard from './containers/Dashboard/DashBoard';
import { ProtectedAdmin } from './components/ProtectedAdmin';



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
          <Route exact path="/detail/:id" element={<ArticleDetail />} />
          <Route exact path="/sumate" element={<JoinForm />} />
          <Route exact path="/donar" element={<Donate />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedAdmin>
                <DashBoard />
              </ProtectedAdmin>
            }
          />
        </Routes>
       <Footer/>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
