import { useEffect, useState } from 'react'
// import ArticleList from './ArticleList'
import SearchBar from '../SearchBar'
import ListContainer from './ListContainer'
import { useLocation } from 'react-router-dom'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

function ProductsListContainer() {
  const location = useLocation()
  const products = location.state
  // console.log(products)

  const [product, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [word, setWord] = useState('')

  const fetchProducts = async () => {
    try {
      const stortedProducts = products.products.sort()
      setAllProducts(stortedProducts)
      setProducts(stortedProducts)
      setError(null)
    } catch (err) {
      setError(err.message)
      setProducts(null)
    } finally {
      setLoading(false)
    }
  }

  const updateWord = word => {
    const filtered = allProducts.filter(products => {
      return `${products.name.toLowerCase()}`.includes(word.toLowerCase())
    })
    setWord(word)
    setProducts(filtered)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {/* <div className="wrapper">
      <h2>Latest HN Stories</h2>
      {loading && <div>HackerNews frontpage stories loading...</div>}
      {error && <div>{`Problem fetching the HackeNews Stories - ${error}`}</div>}
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <HackerNewsStories stories={stories} />
    </div> */}
      <div className="container pb-5">
        <div className="flex-grow-1 d-lg-flex align-items-center mb-4">
          <div className="w-50 mx-auto">
            <SearchBar word={word} onChange={updateWord} />
          </div>
          <div className="text-end icon">
            <Link to="/productForm" state={products}>
              <MdOutlineBookmarkAdd />
            </Link>
          </div>
        </div>
        <div className="mx-3">
          {/* {console.log(products)} */}
          <ListContainer link="/product" items={product} />
        </div>
      </div>
    </>
  )
}

export default ProductsListContainer
