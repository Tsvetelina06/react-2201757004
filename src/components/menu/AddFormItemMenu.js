import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button, Form as form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

function AddFormItemMenu() {
  const { t } = useTranslation()

  const [dayMeal, setDayMeal] = useState([{ day: '', meal: '' }])

  const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const meal = ['breakfast', 'lunch', 'dinner']

  function returnWeek(items) {
    return items.map((item, key) => {
      let name = 'weekday.' + item
      return (
        <option key={key} value={item}>
          {t(name)}
        </option>
      )
    })
  }

  function returnMeal(items) {
    return items.map((item, key) => {
      let name = 'weekMenuPage.' + item
      return (
        <option key={key} value={item}>
          {t(name)}
        </option>
      )
    })
  }

  const validationSchema = Yup.object().shape({
    menu: Yup.array().of(
      Yup.object().shape({
        day: Yup.string(),
        meal: Yup.string(),
      }),
    ),
  })

  return (
    <Formik
      initialValues={{
        menu: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="form-group">
            <FieldArray
              name="menu"
              className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
            >
              <div className="form-group">
                <div className="form-group">
                  <InputGroup className="mb-3">
                    <Field
                      as="select"
                      name={`day`}
                      aria-label={t('weekMenu.day')}
                      className={`form-select form-control ${
                        errors.menu && touched.menu ? 'is-invalid' : ''
                      }`}
                    >
                      <option>{t('weekMenu.day')}</option>
                      {returnWeek(weekday)}
                    </Field>
                    <Field
                      as="select"
                      name={`meal`}
                      aria-label={t('weekMenu.meal')}
                      className={`form-select form-control ${
                        errors.menu && touched.menu ? 'is-invalid' : ''
                      }`}
                    >
                      <option>{t('weekMenu.meal')}</option>
                      {returnMeal(meal)}
                    </Field>
                    <Button className="text-white" type="submit" variant="primary">
                      <IoMdAddCircleOutline className="me-1" />
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </FieldArray>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddFormItemMenu
