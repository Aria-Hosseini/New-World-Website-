import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Notfound from './components/pages/Notfound'
import Header from './Header'
import {BrowserRouter as Router , Routes , Route, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import Preloader from './PreLoader'

function App() {
// استفاده از usestate ,useeffect برای تنظیم کردن پریلودر

  const [loading , setloading] = useState(true)
  const [fadeOut , setFadeout] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeout(true); 
      setTimeout(() => {
        setloading(false);
      }, 500);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ?(<Preloader /> ): ( 
      <div style={{fontFamily: 'vazir'}} className="bg-neutral-950">
        <Router >
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboute' element={<About />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='*' element={<Notfound />} /> 


          </Routes>
          <Footer />
        </Router>
      </div>
    )}
      
      
    </>
  )
}

export default App
