import { useEffect, useState } from 'react'
import ArticleList from './ArticleList'
import SearchBar from '../SearchBar'
import { useTranslation } from 'react-i18next'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useArticleContext } from '../../context/ArticlesContext'

function ArticleListContainer() {
  // const { articles } = useArticleContext()
  const { t } = useTranslation()

  const articles = [
    {
      article_id: '61731621b7c322000963d550',
      name: 'An Introduction to JSON',
      images: [
        'https://media.geeksforgeeks.org/wp-content/uploads/20191206140918/JSON6.png',
        'https://coursework.vschool.io/content/images/2016/04/json-banner-750x220.jpg',
      ],
      description:
        'This article provides a comprehensive introduction to JSON (JavaScript Object Notation).',
      dateOfEntry: '2022-10-20T08:00:00.000Z',
      timeRead: 10,
      tags: ['JSON', 'JavaScript', 'Data Serialization'],
      reviews: [
        {
          rating: 4,
          date: '2022-10-20T08:00:00.000Z',
          text: 'Great product! I highly recommend it.',
          user: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            password: 'password123',
            roles: ['customer'],
          },
        },
        {
          rating: 5,
          date: '2022-11-20T08:00:00.000Z',
          text: 'Excellent service! The product arrived on time and exceeded my expectations.',
          user: {
            firstName: 'Alice',
            lastName: 'Smith',
            email: 'alice.smith@example.com',
            password: 'password123',
            roles: ['customer'],
          },
        },
      ],
    },
    {
      article_id: '61731621b7c322000963d551',
      name: '10 Tips for Improving Your Productivity',
      images: ['https://example.com/images/image3.jpg', 'https://example.com/images/image4.jpg'],
      description:
        'This article provides practical tips for improving your productivity and getting more done in less time.',
      dateOfEntry: '2022-11-01T12:00:00.000Z',
      timeRead: 8,
      tags: ['Productivity', 'Time Management', 'Self-Improvement'],
      reviews: [
        {
          rating: 3,
          date: '2022-10-18T08:00:00.000Z',
          text: 'The product quality was average, but the customer support was helpful.',
          user: {
            firstName: 'David',
            lastName: 'Johnson',
            email: 'david.johnson@example.com',
            password: 'password456',
            roles: ['customer'],
          },
        },
        {
          rating: 2,
          date: '2022-10-10T08:00:00.000Z',
          text: 'I had a bad experience with this product. It broke after a few days of use.',
          user: {
            firstName: 'Sarah',
            lastName: 'Wilson',
            email: 'sarah.wilson@example.com',
            password: 'password789',
            roles: ['customer'],
          },
        },
      ],
    },
  ]
  // const { articlesContext } = useArticleContext(articles)
  const [articleList, setArticleList] = useState(articles)

  const [article, setStories] = useState([])
  const [allStories, setAllStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [keyword, setKeyword] = useState('')

  const fetchStories = async () => {
    try {
      // const data = articles.json();
      const stortedStories = articles.sort()
      setAllStories(stortedStories)
      setStories(stortedStories)
      setError(null)
    } catch (err) {
      setError(err.message)
      setStories(null)
    } finally {
      setLoading(false)
    }
  }

  const updateKeyword = keyword => {
    const filtered = allStories.filter(article => {
      return `${article.name.toLowerCase()}`.includes(keyword.toLowerCase())
    })
    setKeyword(keyword)
    setStories(filtered)
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <>
      <div className="w-50 ms-auto mb-3">
        <SearchBar keyword={keyword} onChange={updateKeyword} />
      </div>
      <div className="page-title d-flex align-items-center justify-content-between mt-3 mt-md-0 mb-3">
        <h5 className="mb-0">{t('page.results')}</h5>
        <div className="text-end icon">
          {/* <BiBookAddBiBookAdd /> */}
          <Link to="/articleForm">
            <MdOutlineBookmarkAdd />
          </Link>
        </div>
        {/* <ViewSwitch/> */}
      </div>
      {/* {articlesList()}
    {Debugger()} */}
      <ArticleList articles={articles}></ArticleList>
    </>
  )
}

export default ArticleListContainer
