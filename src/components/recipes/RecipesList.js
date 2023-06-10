import RecipesItemList from './RecipesItemList'
import { useState, useEffect } from 'react'
import RecipesItemListPleceholder from './RecipesItemListPlaceholder'

function RecipesList({ recipes }) {
  const dummyRecipes = [...Array(recipes.length + 1).keys()].slice(1)
  const [isLoading, setIsLoading] = useState(true)

  function returnReipe(recipes) {
    if (isLoading) {
      return dummyRecipes.map(dummyRecipe => {
        return <RecipesItemListPleceholder key={dummyRecipe} />
      })
    }

    if (!recipes.length && !isLoading) {
      return (
        <div className="alert alert-dark" role="alert">
          No results
        </div>
      )
    }

    return recipes.map((recipe, key) => {
      return <RecipesItemList key={key} recipe={recipe} />
    })
  }

  useEffect(() => {
    // Simulate loading data or performing an asynchronous operation
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return <div className="row justify-content-center mx-1">{returnReipe(recipes)}</div>
}

export default RecipesList
