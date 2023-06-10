import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button, Form as form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

function RecipeForm({ data }) {
  const navigate = useNavigate()
  // const { setArticles } = useArticleContext();
  const { t } = useTranslation()

  const [initialProducts, setInitialProducts] = useState([{ quantityProduct: '', name: '' }])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('loginPage.requiredFieldValidation')),
    timeToCook: Yup.number()
      .min(0, t('form.time'))
      .required(t('loginPage.requiredFieldValidation')),
    products: Yup.array().of(
      Yup.object().shape({
        quantity: Yup.number().positive('form.time'),
        name: Yup.string(),
      }),
    ),
    description: Yup.string().required(t('loginPage.requiredFieldValidation')),

    images: Yup.mixed(),
    // .test("is-valid-type", "Not a valid image type",
    //   value => isValidFileType(value && value.name.toLowerCase(), "image")),
  })
  const products = [
    {
      _id: 'product1',
      name: 'Product 1',
      image: 'image1.jpg',
      calories: 100,
      protein: 5,
      carbohydrates: 20,
      fats: 3,
      description: 'This is product 1 description.',
    },
    {
      _id: 'product2',
      name: 'Product 2',
      image: 'image2.jpg',
      calories: 150,
      protein: 10,
      carbohydrates: 25,
      fats: 5,
      description: 'This is product 2 description.',
    },
    {
      _id: 'product3',
      name: 'Product 3',
      image: 'image3.jpg',
      calories: 120,
      protein: 8,
      carbohydrates: 18,
      fats: 4,
      description: 'This is product 3 description.',
    },
    {
      _id: 'product4',
      name: 'Product 4',
      image: 'image4.jpg',
      calories: 80,
      protein: 3,
      carbohydrates: 15,
      fats: 2,
      description: 'This is product 4 description.',
    },
    {
      _id: 'product5',
      name: 'Product 5',
      image: 'image5.jpg',
      calories: 200,
      protein: 12,
      carbohydrates: 30,
      fats: 6,
      description: 'This is product 5 description.',
    },
  ]

  function getProguct() {
    return products.map((product, key) => {
      return (
        <option value={product} key={key}>
          {product.name}
        </option>
      )
    })
  }

  return (
    <Formik
      initialValues={{
        name: data ? data.name : '',
        description: data ? data.description : '',
        timeToCook: data ? data.timeToCook : '',
        products: data ? data.products : initialProducts,
        images: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        values.images = values.images.split('\\').pop()

        console.log(values)
        navigate('/recipes')
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">{t('recipe.name')}</label>
            <Field
              name="name"
              type="text"
              className={`form-control custom-form-control ${
                errors.name && touched.name ? 'is-invalid' : ''
              }`}
            />
            {errors.name && touched.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <FieldArray
              name="products"
              className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
            >
              {({ push, remove }) => (
                <div className="form-group">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <label htmlFor="products">{t('recipe.products')}</label>
                    <div className="rounded-pill ms-auto my-1">
                      <Button
                        className="b-add b-add text-white btn btn-primary me-1"
                        onClick={() => push({ name: '', quantityProduct: '' })}
                      >
                        <IoMdAddCircleOutline />
                      </Button>
                    </div>
                  </div>
                  {values.products.map((product, index) => (
                    <div key={index} className="form-group">
                      <InputGroup className="mb-3">
                        <Field
                          type="number"
                          name={`products[${index}].quantityProduct`}
                          className={`form-control ${
                            errors.products && touched.products ? 'is-invalid' : ''
                          }`}
                        />
                        <Field
                          as="select"
                          name={`products[${index}].name`}
                          aria-label="Default select example"
                          className={`form-select form-control ${
                            errors.products && touched.products ? 'is-invalid' : ''
                          }`}
                        >
                          <option>{t('recipe.products')}</option>
                          {getProguct()}
                        </Field>
                        <Button className="b-remove" onClick={() => remove(index)}>
                          <IoMdRemoveCircleOutline className="me-1" />
                        </Button>
                      </InputGroup>
                      {errors[`products[${index}]`] && touched.products ? (
                        <div className="invalid-feedback">{errors.products}</div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
          </div>

          <div className="form-group">
            <label htmlFor="timeToCook">{t('recipe.timeToCook')}</label>
            <Field
              name="timeToCook"
              type="number"
              className={`form-control custom-form-control ${
                errors.timeToCook && touched.timeToCook ? 'is-invalid' : ''
              }`}
            />
            {errors.timeToCook && touched.timeToCook ? (
              <div className="invalid-feedback">{errors.timeToCook}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="description">{t('recipe.methodOfPreparation')}</label>
            <Field
              name="description"
              as="textarea"
              rows={3}
              className={`form-control custom-form-control ${
                errors.description && touched.description ? 'is-invalid' : ''
              }`}
            />
            {errors.description && touched.description ? (
              <div className="invalid-feedback">{errors.description}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="images">{t('form.image')}</label>
            <Field
              name="images"
              type="file"
              multiple
              className={`form-control ${errors.images && touched.images ? 'is-invalid' : ''}`}
            />
            {errors.images && touched.images ? (
              <div className="invalid-feedback">{errors.images}</div>
            ) : null}
          </div>

          <div className="d-grid gap-2 justify-content-center">
            <Button className="mt-3 text-white" type="submit" variant="primary">
              {!data ? t('form.add') : t('form.edit')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RecipeForm
