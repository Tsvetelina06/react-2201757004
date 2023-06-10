import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useArticleContext } from '../../context/ArticlesContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

function NutritionCategoryForm({ data }) {
  console.log(data)
  const navigate = useNavigate()
  // const { setArticles } = useArticleContext();
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('loginPage.requiredFieldValidation')),
    images: Yup.mixed(),
    // .test("is-valid-type", "Not a valid image type",
    //   value => isValidFileType(value && value.name.toLowerCase(), "image")),
  })

  return (
    <Formik
      initialValues={{
        name: data ? data.name : '',
        image: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        values.image = values.image.split('\\').pop()

        console.log(values)
        // const path = data ? '/article' :  '/articles';
        // navigate(path,
        // {
        //   state: {
        //     data
        //   }
        // } );
        navigate('/nutritionalComposition')
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="form-group">
            <Field
              name="name"
              placeholder={t('nutritionCategoryForm.name')}
              type="text"
              className={`form-control custom-form-control ${
                errors.name && touched.name ? 'is-invalid' : ''
              }`}
            />
            {errors.name && touched.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="form-group my-4">
            <Field
              name="images"
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
              {!data ? t('form.add') : t('form.edit')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NutritionCategoryForm
