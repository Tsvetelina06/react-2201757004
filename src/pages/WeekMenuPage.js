import WeekMenuTabbed from '../components/menu/WeekMenuTabbed'
import { useTranslation } from 'react-i18next'

function WeekMenuPage() {
  const { t } = useTranslation()

  const weekMenu = {
    id: '61234e79a2d1c8f29d88c7a1',
    day: 'Monday',
    meal: 'breakfast',
    user: {
      id: '61234e79a2d1c8f29d88c7b1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
    recipes: [
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
      },
    ],
    products: [
      {
        id: '6093c36f191af0a26694f713',
        name: 'Milk',
        image:
          'https://png.pngtree.com/png-vector/20210510/ourlarge/pngtree-milk-box-and-glass-vector-ilustration-png-image_3269886.jpg',
        calories: 150,
        protein: 8,
        carbohydrates: 12,
        fats: 5,
        description: 'A nutritious beverage that is high in calcium and vitamin D.',
      },
    ],
  }

  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <WeekMenuTabbed weekMenu={weekMenu} />
        </div>
      </div>
    </div>
  )
}

export default WeekMenuPage
