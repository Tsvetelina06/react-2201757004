import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import ListContainer from './ListContainer'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

function NutritionCategoryListContainer() {
  const nutritionCategory = [
    {
      id: '6093c36f191af0a26694f712',
      name: 'Dairy Products',
      image:
        'https://img.freepik.com/free-vector/fresh-organic-milk-products-set-with-cheese-butter_1284-14075.jpg?w=2000',
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
        {
          id: '6093c36f191af0a26694f714',
          name: 'Cheese',
          image: 'https://example.com/cheese.jpg',
          calories: 110,
          protein: 7,
          carbohydrates: 1,
          fats: 9,
          description:
            'A versatile food that can be enjoyed on its own or added to dishes for extra flavor and protein.',
        },
      ],
    },
    {
      id: '6093c36f191af0a26694f70a',
      name: 'Protein Bars',
      image:
        'https://thumbs.dreamstime.com/b/protein-bar-sport-nutrition-vector-icon-style-illustration-logo-isolated-element-90455749.jpg',
      products: [
        {
          id: '6093c36f191af0a26694f70b',
          name: 'Chocolate Chip Protein Bar',
          image:
            'https://img.freepik.com/premium-vector/bitten-chocolate-chip-cookie-isolated-white-background-vector-illustration_505980-830.jpg?w=2000',
          calories: 250,
          protein: 20,
          carbohydrates: 30,
          fats: 8,
          description: 'A delicious chocolate chip flavored protein bar.',
        },
        {
          id: '6093c36f191af0a26694f70c',
          name: 'Peanut Butter Protein Bar',
          image: 'https://example.com/peanut-butter-bar.jpg',
          calories: 280,
          protein: 22,
          carbohydrates: 28,
          fats: 10,
          description: 'A satisfying peanut butter flavored protein bar.',
        },
      ],
    },
    {
      id: '6093c36f191af0a26694f70d',
      name: 'Vegan Protein Powder',
      image: 'https://example.com/vegan-protein-powder.jpg',
      products: [
        {
          id: '6093c36f191af0a26694f70e',
          name: 'Chocolate Vegan Protein Powder',
          image: 'https://example.com/chocolate-vegan-powder.jpg',
          calories: 120,
          protein: 20,
          carbohydrates: 10,
          fats: 2,
          description: 'A rich and chocolatey vegan protein powder.',
        },
      ],
    },
    {
      id: '6093c36f191af0a26694f70f',
      name: 'Probiotics',
      image: 'https://example.com/probiotics.jpg',
      products: [],
    },
  ]

  return (
    <>
      {/* <SearchBar /> */}
      <div className="container pb-5">
        <div className="text-end icon">
          <Link to="/nutritionalCompositionForm">
            <MdOutlineBookmarkAdd />
          </Link>
        </div>
        <div className="mx-3">
          <ListContainer link="/products" items={nutritionCategory} />
        </div>
      </div>
    </>
  )
}

export default NutritionCategoryListContainer
