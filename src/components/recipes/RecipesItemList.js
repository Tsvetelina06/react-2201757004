import { Link } from 'react-router-dom'

function RecipesItemList({ recipe }) {
  return (
    <div className="col-md-3 my-1 me-lg-4 card">
      <div className="h-50 my-auto">
        <Link to="/recipe" state={recipe}>
          <img
            src={recipe.images[0]}
            alt="imageSrc"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = 'https://i.ibb.co/kMj0gfX/horizontel-logo.jpg'
            }}
            className="img-fluid w-75 d-flex mx-auto h-100 rounded"
          />
          <h4 className="ms-3 mb-5 mt-2 text-center pb-lg-5">{recipe.name}</h4>
        </Link>
      </div>
    </div>
  )
}

export default RecipesItemList
