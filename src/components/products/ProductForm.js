import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useArticleContext } from '../../context/ArticlesContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

function ProductForm({ data }) {
  console.log(data)
  const navigate = useNavigate()
  // const { setArticles } = useArticleContext();
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('loginPage.requiredFieldValidation')),
    calories: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    carbohydrates: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    fats: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    protein: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    description: Yup.string().required(t('loginPage.requiredFieldValidation')),
    image: Yup.mixed(),
    // .test("is-valid-type", "Not a valid image type",
    //   value => isValidFileType(value && value.name.toLowerCase(), "image")),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        calories: '',
        carbohydrates: '',
        fats: '',
        protein: '',
        description: '',
        image: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        values.image = values.image.split('\\').pop()

        console.log(values)

        data.products.push(values)
        console.log(data)
        // const path = data ? '/article' :  '/articles';
        // navigate(path,
        // {
        //   state: {
        //     data
        //   }
        // } );
        navigate('/products')
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="form-group mb-3">
            <Field
              name="nameNutrition"
              placeholder={t('nutritionCategoryForm.name')}
              type="text"
              disabled={true}
              value={data.name}
              className={`form-control custom-form-control ${
                errors.name && touched.name ? 'is-invalid' : ''
              }`}
            />
            {errors.name && touched.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="name"
              placeholder={t('product.product')}
              type="text"
              className={`form-control custom-form-control ${
                errors.name && touched.name ? 'is-invalid' : ''
              }`}
            />
            {errors.name && touched.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="calories"
              type="number"
              placeholder={t('product.calories')}
              className={`form-control custom-form-control ${
                errors.calories && touched.calories ? 'is-invalid' : ''
              }`}
            />
            {errors.calories && touched.calories ? (
              <div className="invalid-feedback">{errors.calories}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="carbohydrates"
              placeholder={t('product.carbohydrates')}
              type="number"
              className={`form-control custom-form-control ${
                errors.carbohydrates && touched.carbohydrates ? 'is-invalid' : ''
              }`}
            />
            {errors.carbohydrates && touched.carbohydrates ? (
              <div className="invalid-feedback">{errors.carbohydrates}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="fats"
              placeholder={t('product.fats')}
              type="number"
              className={`form-control custom-form-control ${
                errors.fats && touched.fats ? 'is-invalid' : ''
              }`}
            />
            {errors.fats && touched.fats ? (
              <div className="invalid-feedback">{errors.fats}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="protein"
              placeholder={t('product.protein')}
              type="number"
              className={`form-control custom-form-control ${
                errors.protein && touched.protein ? 'is-invalid' : ''
              }`}
            />
            {errors.protein && touched.protein ? (
              <div className="invalid-feedback">{errors.protein}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <Field
              name="description"
              as="textarea"
              placeholder={t('form.description')}
              rows={3}
              className={`form-control custom-form-control ${
                errors.description && touched.description ? 'is-invalid' : ''
              }`}
            />
            {errors.description && touched.description ? (
              <div className="invalid-feedback">{errors.description}</div>
            ) : null}
          </div>

          <div className="form-group my-4">
            <Field
              name="image"
              type="file"
              placeholder={t('form.image')}
              className={`form-control ${errors.image && touched.image ? 'is-invalid' : ''}`}
            />
            {errors.image && touched.image ? (
              <div className="invalid-feedback">{errors.image}</div>
            ) : null}
          </div>

          <div className="d-grid gap-2 justify-content-center">
            <Button className="mt-3 text-white" type="submit" variant="primary">
              {t('form.add')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ProductForm
