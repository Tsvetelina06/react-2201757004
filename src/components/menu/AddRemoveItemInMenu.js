import AddFormItemMenu from './AddFormItemMenu'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'
import { useState } from 'react'
import { Button, Field } from 'react-bootstrap'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import InputGroup from 'react-bootstrap/InputGroup'

function AddRemoveItemInMenu({ items, name }) {
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

  let arrayMenu = []
  function arrayItems(items, name, weekMenu) {
    let info = weekMenu[items]
    // console.log(info)
    return info.map(item => {
      if (item.name === name) {
        arrayMenu.push({ day: weekMenu.day, meal: weekMenu.meal })
        // console.log(arrayMenu)
      }
    })
  }

  function getItemMenu(array) {
    // console.log(array)
    return array.map((arr, key) => {
      //   console.log(arr.day)
      //   console.log(arr.meal)
      return (
        <div key={key} className="row d-flex align-items-center justify-content-center px-4">
          <div className="col-md-3 my-1">{t('weekday.' + arr.day)}</div>
          <div className="col-md-3 my-1">{t('weekMenuPage.' + arr.meal)}</div>
          <Button className="b-remove col-md-2 my-1" type="submit" variant="primary">
            <IoMdRemoveCircleOutline className="me-1" />
          </Button>
        </div>
      )
    })
  }

  function returnItemMenu(arrayMenu) {
    if (arrayMenu.length > 0) {
      return (
        <>
          <h5 className="mb-3">{t('weekMenu.successAddToMenu')}</h5>
          <div className={`mx-auto card py-2 ${isMobile ? 'w-100' : 'w-50'}`}>
            {getItemMenu(arrayMenu)}
          </div>
        </>
      )
    }
  }

  return (
    <div className="my-4">
      <div>
        <h4 className="mb-3">{t('weekMenu.addToMenu')}</h4>
        <div className={`mx-auto ${isMobile ? 'w-100' : 'w-50'}`}>
          <AddFormItemMenu />
        </div>
      </div>
      <div>
        {arrayItems(items, name, weekMenu)}
        {returnItemMenu(arrayMenu)}
      </div>
    </div>
  )
}

export default AddRemoveItemInMenu
