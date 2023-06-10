import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import Value from '../products/Value'

function ContextTabMenu({ weekM, d, m }) {
  const { t } = useTranslation()
  const g = t('product.gram')

  let calories = 0
  let protein = 0
  let carbohydrates = 0
  let fats = 0

  function calcNutrients(partition, item) {
    if (partition === 'recipe') {
      item.products.map(product => {
        calories =
          calories + (Number(product.quantityProduct) * Number(product.product[0].calories)) / 100
        protein =
          protein + (Number(product.quantityProduct) * Number(product.product[0].protein)) / 100
        carbohydrates =
          carbohydrates +
          (Number(product.quantityProduct) * Number(product.product[0].carbohydrates)) / 100
        fats = fats + (Number(product.quantityProduct) * Number(product.product[0].fats)) / 100
      })
    }
    if (partition === 'product') {
      calories = calories + Number(item.calories)
      protein = protein + Number(item.calories)
      carbohydrates = carbohydrates + Number(item.calories)
      fats = fats + Number(item.calories)
    }
  }

  function returnNutrients() {
    const returnNutrients = {
      calories,
      protein,
      carbohydrates,
      fats,
    }
    return returnNutrients
  }

  function getRecipes(weekMenu, day, meal) {
    if (weekMenu.day === day && weekMenu.meal === meal) {
      if (weekMenu.recipes) {
        return weekMenu.recipes.map((recipe, key) => {
          calcNutrients('recipe', recipe)
          return (
            <div key={key} className="my-2">
              <Link to={'/recipe'} state={recipe}>
                {recipe.name}
              </Link>
            </div>
          )
        })
      }
    }
  }

  function getProducts(weekMenu, day, meal) {
    if (weekMenu.day === day && weekMenu.meal === meal) {
      if (weekMenu.products) {
        return weekMenu.products.map((product, key) => {
          calcNutrients('product', product)
          return (
            <div key={key} className="my-2">
              <Link key={key} to={'/product'} state={product}>
                {product.name}
              </Link>
            </div>
          )
        })
      }
    }
  }

  function returnResult() {
    if (returnNutrients().calories === 0) {
      return <div className="my-2">{t('weekMenu.result')}</div>
    }
  }

  return (
    <div className="row justify-content-center mx-1">
      <div className="col-md-4 mb-4">
        <h5 className="textHeaderTabContent">{t('navLinks.weekMenu')}</h5>
        {getRecipes(weekM, d, m)}
        {getProducts(weekM, d, m)}
        {returnResult()}
      </div>
      <div className="col-md-8 mb-4">
        <h5 className="textHeaderTabContent">{t('navLinks.nutritionalComposition')}</h5>
        <div className="row d-flex">
          <Value name={t('product.calories')} value={[returnNutrients().calories]} />
          <Value name={t('product.protein')} value={[returnNutrients().protein, g]} />
          <Value name={t('product.carbohydrates')} value={[returnNutrients().carbohydrates, g]} />
          <Value name={t('product.fats')} value={[returnNutrients().fats, g]} />
        </div>
      </div>
    </div>
  )
}

export default ContextTabMenu
