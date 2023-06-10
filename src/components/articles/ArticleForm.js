import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useArticleContext } from '../../context/ArticlesContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

function ArticleForm({ data }) {
  const navigate = useNavigate()
  // const { setArticles } = useArticleContext();
  const { t } = useTranslation()

  const [initialTags, setInitialTags] = useState([''])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('loginPage.requiredFieldValidation')),
    timeRead: Yup.number().min(0, t('form.time')).required(t('loginPage.requiredFieldValidation')),
    tags: Yup.array().of(Yup.string()).min(1, t('form.leastOneTag')),
    description: Yup.string().required(t('loginPage.requiredFieldValidation')),

    images: Yup.mixed(),
    // .test("is-valid-type", "Not a valid image type",
    //   value => isValidFileType(value && value.name.toLowerCase(), "image")),
  })

  return (
    <Formik
      initialValues={{
        name: data ? data.name : '',
        description: data ? data.description : '',
        timeRead: data ? data.timeRead : '',
        dateOfEntry: new Date().toISOString(),
        tags: data ? data.tags : initialTags,
        images: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        values.images = values.images.split('\\').pop()

        console.log(values)
        // const path = data ? '/article' :  '/articles';
        // navigate(path,
        // {
        //   state: {
        //     data
        //   }
        // } );
        navigate('/articles')
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">{t('article.name')}</label>
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
              name="tags"
              className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
            >
              {({ push, remove }) => (
                <div className="form-group">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <label htmlFor="tags">{t('article.tags')}</label>
                    <div className="rounded-pill ms-auto my-1">
                      <Button
                        className="b-add b-add text-white btn btn-primary me-1"
                        onClick={() => push('')}
                      >
                        <IoMdAddCircleOutline />
                      </Button>
                    </div>
                  </div>
                  {values.tags.map((tag, index) => (
                    <div key={index} className="form-group">
                      <InputGroup className="mb-3">
                        <Field
                          type="text"
                          name={`tags[${index}]`}
                          className={`form-control ${
                            errors.tags && touched.tags ? 'is-invalid' : ''
                          }`}
                        />
                        <Button className="b-remove" onClick={() => remove(index)}>
                          <IoMdRemoveCircleOutline className="me-1" />
                        </Button>
                      </InputGroup>
                      {errors[`tags[${index}]`] && touched.tags ? (
                        <div className="invalid-feedback">{errors.tags}</div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
          </div>

          <div className="form-group">
            <label htmlFor="timeRead">{t('form.timeRead')}</label>
            <Field
              name="timeRead"
              type="number"
              className={`form-control custom-form-control ${
                errors.timeRead && touched.timeRead ? 'is-invalid' : ''
              }`}
            />
            {errors.timeRead && touched.timeRead ? (
              <div className="invalid-feedback">{errors.timeRead}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="description">{t('form.description')}</label>
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

export default ArticleForm
