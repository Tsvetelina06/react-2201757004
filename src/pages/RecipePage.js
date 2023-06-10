import { useLocation } from 'react-router-dom'
import RecipeContainer from '../components/recipes/RecipeContainer'

function RecipePage() {
  const location = useLocation()
  const recipe = location.state
  // console.log(recipe)

  return (
    <div className="container">
      <RecipeContainer recipe={recipe} />
    </div>
  )
}

export default RecipePage
