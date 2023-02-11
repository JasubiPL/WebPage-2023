import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './virtual-pages/home'
import Nav from './components/Nav'
import NavMobile from './components/NavMobile'
import Footer from './components/Footer'
import Blog from './virtual-pages/Blog'
import FullBlogArticles from './components/FullBlogArticles'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <NavMobile />
      <Footer />
    </div>
  )
}

export default App
