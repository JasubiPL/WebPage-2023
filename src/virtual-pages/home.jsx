import BannerHeader from '../components/BannerHeader'
import '../styles/virtual-pages/home.css'
import CompleteAppList from '../components/CompleteAppList'
import FullBlogArticles from '../components/FullBlogArticles'
export default function Home(){
  return(
    <section className='home'>
      <BannerHeader/>
      <CompleteAppList />
      <FullBlogArticles />
    </section>
  )
}