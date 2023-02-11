import '../styles/components/Footer.css'
import facebookIcon from '../img/icons/facebook-icon.png'
import githubIcon from '../img/icons/github-icon.png'
import linkedinIcon from '../img/icons/linkedin-icon.png'
import twitterIcon from '../img/icons/twitter-icon.png'

export default function Footer(){
  return(
    <footer className='footer'>
      <div className='footer__socialNetworks'>
        <a href=''><img src={facebookIcon} /></a>
        <a href=''><img src={githubIcon} /></a>
        <a href=''><img src={linkedinIcon} /></a>
        <a href=''><img src={twitterIcon} /></a>
      </div>
    </footer>
  )
}