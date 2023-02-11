import '../styles/components/FullBlogArticles.css'
import { fullBlogArtiles } from '../js/blogArticles'

export default function FullBlogArticles(){
  return(
    <section className='fullBlogArticles'>
      <h1 className='fullBlogArticles__tittle'>ULTIMOS ARTICULOS</h1>
      <div className='fullBlogArticles__articles--grid'>
        {fullBlogArtiles.map(article => {
          return(
            <article className='fullBlogArticles__article--container'>
              <div className='fullBlogArticles__frontPage'>
              <h2>{article.tittle}</h2>
                <img src={article.coverImage} />
              </div>
              <p className='fullBlogArticles__date'>{article.date}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}