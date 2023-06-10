import React, { useContext } from 'react'
const articlesContext = {
  articles: [],
  setArticles: () => undefined,
  listView: true,
  setListView: () => undefined,
  discoverArticleLoading: true,
  setDiscoverArticleLoading: () => undefined,
}

export const ArticlesContext = React.createContext(articlesContext)
export const useArticleContext = () => useContext(ArticlesContext)
