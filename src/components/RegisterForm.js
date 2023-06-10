import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useMutation } from 'react-query'
import { client } from '../network/client'
import { createUserMutation } from '../graphql/user'

function RegisterForm() {
  const navigate = useNavigate()
  const { setCurrentUser } = useUserContext()
  const { t } = useTranslation()

  const { mutate: createUser } = useMutation(variables => {
    return client.request(createUserMutation, variables)
  })

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('loginPage.requiredFieldValidation')),
    lastName: Yup.string().required(t('loginPage.requiredFieldValidation')),
    email: Yup.string()
      .email(t('loginPage.emailValidation'))
      .required(t('loginPage.requiredFieldValidation')),
    password: Yup.string()
      .min(6, t('loginPage.passwordValidation'))
      .required(t('loginPage.requiredFieldValidation')),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('loginPage.repeatPasswordValidation'))
      .required(t('loginPage.requiredFieldValidation')),
    kg: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    kgGoal: Yup.number()
      .min(0, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    height: Yup.number()
      .min(50, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
    age: Yup.number()
      .min(7, t('form.positiveNumber'))
      .required(t('loginPage.requiredFieldValidation')),
  })

  const onSubmit = formValues => {
    const { repeatPassword, ...user } = formValues
    createUser({ user })
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        kg: '',
        kgGoal: '',
        height: '',
        age: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // handle form submission
        onSubmit(values)
        setCurrentUser({ email: values.email })
        navigate('/')
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">{t('loginPage.firstName')}</label>
            <Field
              name="firstName"
              type="text"
              className={`form-control ${
                errors.firstName && touched.firstName ? 'is-invalid' : ''
              }`}
            />
            {errors.firstName && touched.firstName ? (
              <div className="invalid-feedback">{errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">{t('loginPage.lastName')}</label>
            <Field
              name="lastName"
              type="text"
              className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`}
            />
            {errors.lastName && touched.lastName ? (
              <div className="invalid-feedback">{errors.lastName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('loginPage.email')}</label>
            <Field
              name="email"
              type="email"
              className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
            />
            {errors.email && touched.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('loginPage.password')}</label>
            <Field
              name="password"
              type="password"
              className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
            />
            {errors.password && touched.password ? (
              <div className="invalid-feedback">{errors.password}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">{t('loginPage.repeatPassword')}</label>
            <Field
              name="repeatPassword"
              type="password"
              className={`form-control ${
                errors.repeatPassword && touched.password ? 'is-invalid' : ''
              }`}
            />
            {errors.repeatPassword && touched.repeatPassword ? (
              <div className="invalid-feedback">{errors.repeatPassword}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="kg">{t('loginPage.kg')}</label>
            <Field
              name="kg"
              type="text"
              className={`form-control ${errors.kg && touched.kg ? 'is-invalid' : ''}`}
            />
            {errors.kg && touched.kg ? <div className="invalid-feedback">{errors.kg}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="kgGoal">{t('loginPage.kgGoal')}</label>
            <Field
              name="kgGoal"
              type="text"
              className={`form-control ${errors.kgGoal && touched.kgGoal ? 'is-invalid' : ''}`}
            />
            {errors.kgGoal && touched.kgGoal ? (
              <div className="invalid-feedback">{errors.kgGoal}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="height">{t('loginPage.height')}</label>
            <Field
              name="height"
              type="text"
              className={`form-control ${errors.height && touched.height ? 'is-invalid' : ''}`}
            />
            {errors.height && touched.height ? (
              <div className="invalid-feedback">{errors.height}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="age">{t('loginPage.age')}</label>
            <Field
              name="age"
              type="text"
              className={`form-control ${errors.age && touched.age ? 'is-invalid' : ''}`}
            />
            {errors.age && touched.age ? (
              <div className="invalid-feedback">{errors.age}</div>
            ) : null}
          </div>

          <div className="d-grid gap-2">
            <Button className="mt-3 text-white" type="submit" variant="primary">
              {t('loginPage.register')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
