//Image Imports
import frontPageExample from '../img/blog/example-front-page.jpg'


//Object with full articles
const fullBlogArticles = [
  {
    id: 1,
    url:"articulo-de-ejemplo",
    tittle : "Articulo de Ejemplo",
    date : "00/00/00",
    coverImage : frontPageExample,
    contentP1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cupiditate quam reprehenderit, tempora aperiam aliquam voluptatem non exercitationem alias ad, ab vel ex, minus magnam incidunt excepturi officia porro. Ratione.",
    articleTopic:'videogames'
  },

]

//Filters filter for articles by section

const technologyBlogArticles = fullBlogArticles.filter(article => article.articleTopic === 'technology');
const reflectionBlogArticles = fullBlogArticles.filter(article => article.articleTopic === 'reflection');
const videogamesBlogArticles = fullBlogArticles.filter(article => article.articleTopic === 'videogames');

//Exports
export {fullBlogArticles, technologyBlogArticles, videogamesBlogArticles,reflectionBlogArticles};
