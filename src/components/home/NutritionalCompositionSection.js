import { useTranslation } from 'react-i18next'
import Value from '../products/Value'

function NutritionalCompositionSection({ title, user }) {
  const { t } = useTranslation()
  let g = t('product.gram')

  let nutrition = {
    calories: 0,
    carbohydrates: 0,
    fats: 0,
    protein: 0,
  }

  function calcNutritionComposition(user, nutrition) {
    let kg = Number(user.kg)
    let height = Number(user.height)
    let age = Number(user.age)
    let indexActivity = Number(user.indexActivity)
    if (user.gender === 'woman' || user.gender === 'WOMAN') {
      nutrition.calories = Math.round(655 + 9.6 * kg + 1.8 * height - 4.7 * age)
    }
    if (user.gender === 'man' || user.gender === 'MAN') {
      nutrition.calories = Math.round(66 + 13.7 * kg + 5 * height - 6.8 * age)
    }
    nutrition.calories = Math.round(nutrition.calories * indexActivity)
    nutrition.carbohydrates = Math.round((0.5 * nutrition.calories) / 4) // Въглехидрати 50%
    nutrition.fats = Math.round((0.3 * nutrition.calories) / 9) // Мазнини 30%
    nutrition.protein = Math.round((0.2 * nutrition.calories) / 4) // Протеини 20%
    console.log(nutrition)
    return nutrition
  }

  function returnValue(nutrition) {
    return Object.entries(nutrition).map(([key, value]) => {
      return (
        <Value
          key={key}
          name={t(`product.${key}`)}
          value={[value, key === 'calories' ? null : g]}
        />
      )
    })
  }

  return (
    <section className="py-5">
      <div className="card">
        <div className="card-body px-5">
          <h4 className="card-title text-truncate text-center">{title}</h4>
          <div className="row d-flex justify-content-center">
            {returnValue(calcNutritionComposition(user, nutrition))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NutritionalCompositionSection
