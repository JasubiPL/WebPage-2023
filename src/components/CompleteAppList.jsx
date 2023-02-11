import '../styles/components/CompleteAppList.css'
import { appList } from '../js/appList'
import icon from '../img/icons/react-icon.png'

export default function CompleteAppList(){
  return(
    <div className='complateAppList'>
      <h1 className='complateAppList__tittle'>ULTIMAS APPS</h1>
      {appList.map(app => { 
      return (
        <article className='complateAppList__app'>
          <img src={app.icon} />
          <p>{app.name}</p>
        </article>
      )
    })}
    </div>
  )
}