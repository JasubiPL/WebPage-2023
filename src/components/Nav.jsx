import '../styles/components/Nav.css'
import horizontalLogo from '../img/Imagotipo-Blanco.png'
import { NavLink } from 'react-router-dom'

export default function Nav(){

  let activePage = {
    textDecoration: 'none',
  };

  let inactive ={
    textDecoration: 'none'
  };

  return(
    <nav className='nav'>
      <img className='nav__logo' src={horizontalLogo} />
      <ul className='nav__list-container'>
        <NavLink to='/' style={({isActive}) => isActive ? activePage : inactive}><li className='nav__link'>Inicio</li></NavLink>
        <NavLink to='/blog' style={({isActive}) => isActive ? activePage : inactive}><li className='nav__link'>Blog</li></NavLink>
        <NavLink to='/contact' style={({isActive}) => isActive ? activePage : inactive}><li className='nav__link'>Contacto</li></NavLink>
      </ul>
    </nav>
  )
}