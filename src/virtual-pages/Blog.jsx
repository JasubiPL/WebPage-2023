import { useState } from 'react'
import FullBlogArticles from '../components/FullBlogArticles'
import '../styles/virtual-pages/Blog.css'
import TechnologyBlogArticles from '../components/TechnologyBlogArticles'
import VideogamesBlogArticles from '../components/VideogamesBlogArticles'
import ReflectionBlogArticles from '../components/ReflectionBlogArticles'

export default function Blog(){

  const [articleList, setArticleList] = useState(<FullBlogArticles />);

  return(
    <section className='blog'>
      <div className='blog__container--center'>
        <aside className='blog__filterNav'>
          <ul>
            <h1 className='blog__tittleFilter'>TEMAS</h1>
            <li className='blog__filterOption' onClick={()=> setArticleList(<FullBlogArticles />)}>Todos</li>
            <li className='blog__filterOption' onClick={()=> setArticleList(<VideogamesBlogArticles />)}>Videojuegos</li>
            <li className='blog__filterOption' onClick={()=> setArticleList(<TechnologyBlogArticles />)}>Tecnologia</li>
            <li className='blog__filterOption' onClick={()=> setArticleList(<ReflectionBlogArticles/>)}>Reflexion</li>
          </ul>
        </aside>
        <section className='blog__artcicles--container'>
          {articleList}
        </section>
        <section className='blog__adds'></section>
      </div>
    </section>
  )
}