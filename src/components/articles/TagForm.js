import React, { useState } from 'react'
import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  tags: Yup.array()
    .of(Yup.string().required('Tag is required'))
    .min(1, 'At least one tag is required'),
})

const TagForm = () => {
  const [initialTags, setInitialTags] = useState([''])

  const handleSubmit = values => {
    console.log(values.tags)
  }

  return (
    <Formik
      initialValues={{ tags: initialTags }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="tags">
            {({ push, remove }) => (
              <div>
                {values.tags.map((tag, index) => (
                  <div key={index}>
                    <Field type="text" name={`tags[${index}]`} />
                    <ErrorMessage name={`tags[${index}]`} component="div" />
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => push('')}>
                  Add Tag
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default TagForm
