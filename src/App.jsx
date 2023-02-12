import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './virtual-pages/home'
import Nav from './components/Nav'
import NavMobile from './components/NavMobile'
import Footer from './components/Footer'
import Blog from './virtual-pages/Blog'
import Contact from './virtual-pages/Contact'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <NavMobile />
      <Footer />
    </div>
  )
}

export default App
