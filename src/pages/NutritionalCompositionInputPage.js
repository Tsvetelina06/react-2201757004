import NutritionCategoryForm from '../components/products/NutritionCategoryForm'
import { Link } from 'react-router-dom'
import { MdBackspace } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

function NutritionalCompositionInputPage() {
  const location = useLocation()
  const data = location.state

  const navigate = useNavigate()
  const handleClick = () => {
    const path = '/nutritionalComposition'
    const state = data ? data : ''

    navigate(path, { state })
  }

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="text-end icon mb-2 me-2">
                <div className="text-end icon mb-3 me-2">
                  <MdBackspace className="custom-icon" onClick={handleClick} />
                </div>
              </div>
              <NutritionCategoryForm data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NutritionalCompositionInputPage
