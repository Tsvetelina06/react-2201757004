import RecipesList from './RecipesList'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

function RecipesListContainer() {
  const recipes = [
    {
      id: '61234e79a2d1c8f29d88c7a1',
      name: 'Avocado Toast',
      images: ['avocado-toast.jpg'],
      description:
        'A simple and delicious breakfast or snack that combines creamy avocado with crunchy toast.',
      products: [
        {
          id: '61234e79a2d1c8f29d88c7a2',
          name: 'Avocado',
          image: 'avocado.jpg',
          calories: 160,
          protein: 2,
          carbohydrates: 9,
          fats: 15,
          description: 'A creamy, nutrient-dense fruit that is high in healthy fats and fiber.',
        },
        {
          id: '61234e79a2d1c8f29d88c7a3',
          name: 'Bread',
          image: 'bread.jpg',
          calories: 120,
          protein: 4,
          carbohydrates: 22,
          fats: 1,
          description:
            'A staple food made from flour, water, and yeast that is a good source of carbohydrates and fiber.',
        },
      ],
      timeToCook: 10,
    },
    {
      id: '61234e79a2d1c8f29d88c7a4',
      name: 'Pesto Pasta',
      images: ['pesto-pasta.jpg'],
      description: 'A flavorful and filling pasta dish that is quick and easy to make.',
      products: [
        {
          id: '61234e79a2d1c8f29d88c7a5',
          name: 'Pasta',
          image: 'pasta.jpg',
          calories: 210,
          protein: 7,
          carbohydrates: 42,
          fats: 1,
          description:
            'A staple food made from wheat flour that is a good source of carbohydrates and protein.',
        },
        {
          id: '61234e79a2d1c8f29d88c7a6',
          name: 'Basil',
          image: 'basil.jpg',
          calories: 5,
          protein: 1,
          carbohydrates: 1,
          fats: 0,
          description: 'An aromatic herb that is a good source of vitamins and minerals.',
        },
        {
          id: '61234e79a2d1c8f29d88c7a7',
          name: 'Pine Nuts',
          image: 'pine-nuts.jpg',
          calories: 190,
          protein: 4,
          carbohydrates: 4,
          fats: 19,
          description: 'A nutrient-dense seed that is a good source of healthy fats and protein.',
        },
      ],
      timeToCook: 20,
    },
  ]

  const recipesCorect = [
    {
      id: '61234e79a2d1c8f29d88c7a1',
      name: 'Spaghetti Bolognese',
      images: ['spaghetti-bolognese.jpg'],
      description:
        'A classic Italian dish that combines spaghetti with a rich and flavorful meat sauce.',
      products: [
        {
          quantityProduct: 500,
          product: [
            {
              id: '61234e79a2d1c8f29d88c7a2',
              name: 'Ground Beef',
              image: 'ground-beef.jpg',
              calories: 250,
              protein: 20,
              carbohydrates: 0,
              fats: 18,
              description:
                'A versatile and protein-rich meat that is commonly used in many dishes.',
            },
          ],
        },
        {
          quantityProduct: 300,
          product: [
            {
              id: '61234e79a2d1c8f29d88c7a4',
              name: 'Chicken Breast',
              image: 'chicken-breast.jpg',
              calories: 120,
              protein: 20,
              carbohydrates: 0,
              fats: 3,
              description: 'A lean and protein-rich meat that is perfect for healthy meals.',
            },
          ],
        },
      ],
      timeToCook: 45,
      reviews: [
        {
          rating: 4,
          date: '2022-10-20T08:00:00.000Z',
          text: 'Great product! I highly recommend it.',
          user: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            password: 'password123',
            roles: ['customer'],
          },
        },
        {
          rating: 5,
          date: '2022-11-20T08:00:00.000Z',
          text: 'Excellent service! The product arrived on time and exceeded my expectations.',
          user: {
            firstName: 'Alice',
            lastName: 'Smith',
            email: 'alice.smith@example.com',
            password: 'password123',
            roles: ['customer'],
          },
        },
      ],
    },
    {
      id: '61234e79a2d1c8f29d88c7a1',
      name: 'Spaghetti Bolognese',
      images: [
        'https://supervalu.ie/thumbnail/800x600/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg',
      ],
      description:
        'A classic Italian dish that combines spaghetti with a rich and flavorful meat sauce.',
      products: [
        {
          quantityProduct: 500,
          product: [
            {
              id: '61234e79a2d1c8f29d88c7a2',
              name: 'Ground Beef',
              image: 'ground-beef.jpg',
              calories: 250,
              protein: 20,
              carbohydrates: 0,
              fats: 18,
              description:
                'A versatile and protein-rich meat that is commonly used in many dishes.',
            },
          ],
        },
        {
          quantityProduct: 300,
          product: [
            {
              id: '61234e79a2d1c8f29d88c7a4',
              name: 'Chicken Breast',
              image: 'chicken-breast.jpg',
              calories: 120,
              protein: 20,
              carbohydrates: 0,
              fats: 3,
              description: 'A lean and protein-rich meat that is perfect for healthy meals.',
            },
          ],
        },
      ],
      timeToCook: 45,
    },
  ]

  return (
    <div className="container">
      <div className="text-end icon">
        {/* <BiBookAddBiBookAdd /> */}
        <Link to="/recipeForm">
          <MdOutlineBookmarkAdd />
        </Link>
      </div>
      <RecipesList recipes={recipesCorect} />
      {/* <p className="my-5">{recipesCorect[0].products[0].product[0].name}</p> */}
    </div>
  )
}

export default RecipesListContainer
