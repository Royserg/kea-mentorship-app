import { useState, useEffect } from 'react'

// https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
const useForm = (initValues, callback, validate) => {
  const [values, setValues] = useState(initValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // Actual submit method/callback provided by component using hook
      callback()
      // Clear inputs
      setValues(initValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  // Method triggered when form is subbmited
  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }

    setIsSubmitting(true)
    setErrors(validate(values))
  }

  const handleChange = e => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  return {
    handleSubmit,
    handleChange,
    values,
    errors
  }
}

export default useForm
