import ArticleContainer from '../components/articles/ArticleContainer'
import { useLocation } from 'react-router-dom'
// import StarRating from "../components/review/-StarRating"

function ArticlePage() {
  const location = useLocation()
  const data = location.state
  // console.log(data)

  return (
    <div className="container">
      <ArticleContainer article={data} />
    </div>
  )
}

export default ArticlePage
