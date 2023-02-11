import '../styles/components/FullBlogArticles.css'
import { reflectionBlogArticles } from '../js/blogArticles'

export default function ReflectionBlogArticles(){
  return(
    <section className='fullBlogArticles'>
      <h1 className='fullBlogArticles__tittle'>REFLEXION</h1>
      <div className='fullBlogArticles__articles--grid'>
        {reflectionBlogArticles.map(article => {
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