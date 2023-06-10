import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BaseCarousel from '../BaseCarousel'
import NecessaryProducts from './NecessaryProducts'
import Value from '../products/Value'
// import ListGroup from 'react-bootstrap/ListGroup';
import { BiTimeFive } from 'react-icons/bi'
import EditRemoveButton from '../EditRemoveButton'
import { TbArrowBackUp } from 'react-icons/tb'
import ReviewSection from '../review/ReviewSection'
import AddRemoveItemInMenu from '../menu/AddRemoveItemInMenu'

function RecipeContainer({ recipe }) {
  const { t } = useTranslation()
  const g = t('product.gram')
  // console.log(recipe)

  function nutCompositionRecipe(products, value) {
    let result = 0
    products.map(product => {
      let qua = Number(product.quantityProduct)
      let v = product.product[0][value]
      result = (qua * v) / 100 + result
    })

    return result
  }

  return (
    <>
      <div className="flex-grow-1 d-lg-flex align-items-center">
        <div className="text-start icon mb-3">
          <Link to={'/recipes'}>
            <TbArrowBackUp className="me-5" />
          </Link>
        </div>
        <EditRemoveButton editTo={'/recipeForm'} deleteToSucces={'/recipes'} stateInfo={recipe} />
      </div>
      <BaseCarousel images={recipe.images} />
      <div className="flex-grow-1 d-md-flex align-items-center mt-3 mb-2">
        <h1 style={{ fontFamily: 'Lora' }}>{recipe.name}</h1>
        <div className="fw-normal rounded-pill ms-auto text-end my-2">
          <h5 className="me-4">
            <BiTimeFive className="me-1" /> {recipe.timeToCook} {t('recipe.min')}
          </h5>
        </div>
      </div>

      <div>
        <AddRemoveItemInMenu items={'recipes'} name={recipe.name} />
      </div>

      <div className="my-4">
        <h4 className="mb-3">{t('recipe.necessaryProducts')}</h4>
        <div className="w-50">
          <NecessaryProducts necessaryProducts={recipe.products} />
        </div>
      </div>
      <div>
        <h4>{t('recipe.nutCompositionRecipe')}</h4>
        <div className="row d-flex justify-content-center">
          <Value
            name={t('product.calories')}
            value={[nutCompositionRecipe(recipe.products, 'calories')]}
          />
          <Value
            name={t('product.protein')}
            value={[nutCompositionRecipe(recipe.products, 'protein'), g]}
          />
          <Value
            name={t('product.carbohydrates')}
            value={[nutCompositionRecipe(recipe.products, 'carbohydrates'), g]}
          />
          <Value
            name={t('product.fats')}
            value={[nutCompositionRecipe(recipe.products, 'fats'), g]}
          />
        </div>
      </div>
      <div>
        <h4 className="mb-3">{t('recipe.methodOfPreparation')}</h4>
        <p className="card py-2 px-3">{recipe.description}</p>
      </div>
      <div>
        <ReviewSection reviews={recipe.reviews} />
      </div>
    </>
  )
}

export default RecipeContainer
