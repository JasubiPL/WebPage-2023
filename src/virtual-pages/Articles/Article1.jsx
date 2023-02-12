import { fullBlogArticles } from "../../js/blogArticles"
import '../../styles/virtual-pages/Article.css'

export default function(){
  const articleInfo = fullBlogArticles.filter(article => article.id === 1);
  return(
    <div className="article">
      {articleInfo.map(article => {
        return(
          <div className="article__container">
            <h1>{article.tittle}</h1>
            <span>{article.date}</span>
            <p> {article.contentP1} </p>
          </div>         
        )
      })}
    </div>
  )
}