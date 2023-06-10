import ProductForm from '../components/products/ProductForm'
import ProductEditForm from '../components/products/ProductEditForm'
import { MdBackspace } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductInputPage() {
  const location = useLocation()
  const data = location.state
  console.log(data)
  // console.log(data.some(item => item.products === data.products))
  const navigate = useNavigate()
  const handleClick = () => {
    const path = data.products ? '/products' : '/product'
    const state = data

    navigate(path, { state })
  }

  function correctFormActivation(data) {
    const products = 'products'
    if (data.products) {
      return <ProductForm data={data} />
    } else {
      return <ProductEditForm data={data} />
    }
  }

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="text-end icon mb-3 me-2">
                <MdBackspace className="custom-icon" onClick={handleClick} />
              </div>
              {correctFormActivation(data)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInputPage
