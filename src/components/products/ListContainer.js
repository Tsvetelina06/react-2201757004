import ItemListContainer from './ItemListContainer'
import { useEffect, useState } from 'react'
import ItemListContainerPleceholder from './ItemListContainerPlaceholder'

function ListContainer({ link, items }) {
  const dummyListProducts = [...Array(items.length + 1).keys()].slice(1)
  const [isLoading, setIsLoading] = useState(true)

  function getItemList() {
    if (isLoading) {
      return dummyListProducts.map(dummyListProduct => {
        return <ItemListContainerPleceholder key={dummyListProduct} />
      })
    }

    if (!items.length && !isLoading) {
      return (
        <div className="alert alert-dark" role="alert">
          No results
        </div>
      )
    }
    return items.map((item, key) => {
      return <ItemListContainer key={key} link={link} item={item} />
    })
  }

  useEffect(() => {
    // Simulate loading data or performing an asynchronous operation
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return <div className="row d-flex justify-content-center">{getItemList()}</div>
}

export default ListContainer
