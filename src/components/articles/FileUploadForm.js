import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FileUploadForm = () => {
  const validationSchema = Yup.object().shape({
    file: Yup.mixed().test('fileType', 'Only image files are allowed', value => {
      if (value) {
        return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      }
      return true // If no file is selected, consider it valid
    }),
  })

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema,
    onSubmit: values => {
      // Handle form submission
      console.log(values.file)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="file"
          id="file"
          name="file"
          onChange={event => {
            formik.setFieldValue('file', event.currentTarget.files[0])
          }}
        />
        {formik.errors.file && formik.touched.file && <div>{formik.errors.file}</div>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default FileUploadForm
