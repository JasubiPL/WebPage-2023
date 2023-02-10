import '../styles/components/BannerHeader.css'
import bannerImage from '../img/blog/midjourney.jpg'

export default function BannerHeader(){
  return(
    <header className='bannerHeader'>
      <article className='bannerHeader__article--center'>
        <img className='bannerHeader__img' src={bannerImage} />
        <div className='bannerHeader__info'> 
          <h1>TITULO DE ARTICULO</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Neque, suscipit totam architecto itaque delectus autem odio vitae ab nihil eius. 
            Saepe obcaecati atque sunt dolorum enim ab incidunt id aperiam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Neque, suscipit totam architecto itaque delectus autem odio vitae ab nihil eius. 
            Saepe obcaecati atque sunt dolorum enim ab incidunt id aperiam.</p>
        </div>
      </article>
    </header>
  )
}