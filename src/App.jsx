import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './virtual-pages/home'
import Nav from './components/Nav'
import NavMobile from './components/NavMobile'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <NavMobile />
    </div>
  )
}

export default App
