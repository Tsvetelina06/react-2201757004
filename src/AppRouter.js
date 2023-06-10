import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter } from 'react-router-dom'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import ArticleInputPage from './pages/ArticleInputPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import ProductInputPage from './pages/ProductInputPage'
import NutritionalCompositionPage from './pages/NutritionalCompositionPage'
import NutritionalCompositionInputPage from './pages/NutritionalCompositionInputPage'
import RecipesPage from './pages/RecipesPage'
import RecipePage from './pages/RecipePage'
import RecipeInputPage from './pages/RecipeInputPage'
import WeekMenuPage from './pages/WeekMenuPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="articleForm" element={<ArticleInputPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="productForm" element={<ProductInputPage />} />
          <Route path="nutritionalComposition" element={<NutritionalCompositionPage />} />
          <Route path="nutritionalCompositionForm" element={<NutritionalCompositionInputPage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="recipe" element={<RecipePage />} />
          <Route path="recipeForm" element={<RecipeInputPage />} />
          <Route path="weekMenu" element={<WeekMenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
