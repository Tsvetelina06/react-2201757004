import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import ReviewBar from './ReviewBar'

function ReviewInput() {
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    raiting: Yup.number().required(t('loginPage.requiredFieldValidation')),
    description: Yup.string(),
  })

  return (
    <>
      <div>
        <h4 style={{ fontFamily: 'Lora' }} className="ms-1">
          {t('review.raiting')}
        </h4>
      </div>
      <div className="card my-3 py-4 px-4">
        <Formik
          initialValues={{
            raiting: '',
            description: '',
            dateOfEntry: new Date().toISOString(),
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values)
            // const path = data ? '/article' :  '/articles';
            // navigate(path,
            // {
            //   state: {
            //     data
            //   }
            // } );
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="form-group">
                <Field
                  name="description"
                  as="textarea"
                  rows={3}
                  placeholder={t('review.comment')}
                  className={`form-control custom-form-control ${
                    errors.description && touched.description ? 'is-invalid' : ''
                  }`}
                />
                {errors.description && touched.description ? (
                  <div className="invalid-feedback">{errors.description}</div>
                ) : null}
              </div>

              <div className="flex-grow-1 d-flex align-items-center">
                <h5 className="card-title ms-1 mb-0">{t('review.yourRaiting')}</h5>
                <div className="ms-4 my-2 text-greay-600 star">
                  <ReviewBar rating={0} interactive={true} />
                  {/* <Data dateOfEntry={review.date} /> */}
                </div>
              </div>

              <div className="d-grid gap-2 justify-content-center">
                <Button className="mt-2 text-white" type="submit" variant="primary">
                  {t('form.add')}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default ReviewInput
