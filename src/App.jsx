import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Notfound from './components/pages/Notfound'
import Header from './Header'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from './Footer'
function App() {
  
  return (
    <>
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
      
    </>
  )
}

export default App
