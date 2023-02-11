import '../styles/components/FullBlogArticles.css'
import { technologyBlogArticles } from '../js/blogArticles'

export default function TechnologyBlogArticles(){
  return(
    <section className='fullBlogArticles'>
      <h1 className='fullBlogArticles__tittle'>TECNOLOGIA</h1>
      <div className='fullBlogArticles__articles--grid'>
        {technologyBlogArticles.map(article => {
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