import { useState } from 'react'
import { ArticlesContext } from './ArticlesContext'
function ArticlesContextProvider({ children }) {
  const [articles, setArticles] = useState([])
  const [discoverArticleLoading, setDiscoverArticleLoading] = useState(true)
  const [listView, setListView] = useState(true)
  const context = {
    articles,
    setArticles,
    listView,
    setListView,
    discoverArticleLoading,
    setDiscoverArticleLoading,
  }
  return <ArticlesContext.Provider value={context}>{children}</ArticlesContext.Provider>
}

export default ArticlesContextProvider
