import ArticleListItem from './ArticleListItem'
import { useArticleContext } from '../../context/ArticlesContext'
import ArticleListItemPlaceholder from './ArticleListItemPlaceholder'
import { useState, useEffect } from 'react'

function ArticleList({ articles }) {
  const { listView, discoverArticleLoading } = useArticleContext([])
  const dummyArticles = [...Array(articles.length + 1).keys()].slice(1)
  const [isLoading, setIsLoading] = useState(true)

  function getArticleItemList() {
    if (isLoading) {
      return dummyArticles.map(dummyArticle => {
        return <ArticleListItemPlaceholder key={dummyArticle} />
      })
    }

    if (!articles.length && !isLoading) {
      return (
        <div className="alert alert-dark" role="alert">
          No results
        </div>
      )
    }
    return articles.map((article, key) => {
      if (listView) {
        return <ArticleListItem key={key} article={article} />
      }
      // return <ArticleGridItem article={article}/>
    })
  }

  useEffect(() => {
    // Simulate loading data or performing an asynchronous operation
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={listView ? '' : 'row'}>
      {/* {articlesList()} */}
      {getArticleItemList()}
    </div>
  )
}

export default ArticleList
