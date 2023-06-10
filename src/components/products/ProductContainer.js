import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Value from './Value'
import { TbArrowBackUp } from 'react-icons/tb'
import EditRemoveButton from '../EditRemoveButton'
import AddRemoveItemInMenu from '../menu/AddRemoveItemInMenu'

function ProductContainer() {
  const location = useLocation()
  const product = location.state
  // console.log(product)
  const { t } = useTranslation()
  const g = t('product.gram')

  // const navigate = useNavigate()
  // function handleGoBack() {
  //   navigate(-1) // Go back one page
  // }

  return (
    <>
      <div className="container mb-3">
        <div className="flex-grow-1 d-lg-flex align-items-center">
          <div className="text-start icon mb-3">
            <Link to="/nutritionalComposition">
              <TbArrowBackUp className="me-5" />
            </Link>
          </div>
          <EditRemoveButton
            editTo={'/productForm'}
            deleteToSucces={'/products'}
            stateInfo={product}
          />
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 my-auto d-flex justify-content-center">
            <img
              src={product.image}
              alt={product.image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = 'https://i.ibb.co/fdbPGq5/logo.png'
              }}
              className="rounded-circle w-50 p-3"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <div className="flex-grow-1 d-flex align-items-center">
                <h3 className="card-title ms-2 mb-3" style={{ fontFamily: 'Lora' }}>
                  {product.name}
                </h3>
              </div>
              <p className="">
                100 {g} {t('product.contain')}:
              </p>
              <div className="row d-flex">
                <Value name={t('product.calories')} value={[product.calories]} />
                <Value name={t('product.protein')} value={[product.protein, g]} />
                <Value name={t('product.carbohydrates')} value={[product.carbohydrates, g]} />
                <Value name={t('product.fats')} value={[product.fats, g]} />
              </div>
            </div>
          </div>
          <div className="row card mx-5 py-2">
            <p className="card-text my-1">{product.description}</p>
          </div>
          <div>
            <AddRemoveItemInMenu items={'products'} name={product.name} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductContainer
