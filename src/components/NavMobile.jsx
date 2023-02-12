import '../styles/components/NavMobile.css'
import { NavLink } from 'react-router-dom'
import {FaWindowClose} from 'react-icons/fa'
import {AiFillHome, AiOutlineAppstoreAdd, AiFillMessage } from 'react-icons/ai'
import {MdArticle} from 'react-icons/md'

export default function NavMobile(){

  let activeMobilePage = {
    textDecoration: 'none',
  };

  let inactive ={
    textDecoration: 'none'
  };

  return(
    <nav className='navMobile'>
      <ul className='navMobile__list-container'>
        <NavLink to='/' style={({isActive}) => isActive ? activeMobilePage : inactive}><li className='navMobile__link'><AiFillHome /></li></NavLink>
        <NavLink to='/blog' style={({isActive}) => isActive ? activeMobilePage : inactive}><li className='navMobile__link'><MdArticle /></li></NavLink>
        <NavLink to='/contact' style={({isActive}) => isActive ? activeMobilePage : inactive}><li className='navMobile__link'><AiFillMessage /></li></NavLink>
      </ul>
    </nav>
  )
}