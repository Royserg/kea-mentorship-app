import React from 'react'
import InputField from 'components/inputField/InputField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import useForm from 'hooks/useForm'
import validate from './RegisterFormValidation'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  submitBtn: {
    width: 400,
    margin: 8
  }
}))

const RegisterForm = ({ onSubmit }) => {
  const initValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const { values, errors, handleSubmit, handleChange } = useForm(
    initValues,
    onFormSubmit,
    validate
  )

  function onFormSubmit () {
    const { name, email, password } = values
    // Send data up to Registration component
    onSubmit({ name, email, password })
  }

  const styles = useStyles()

  return (
    <form onSubmit={handleSubmit} className={styles.root} noValidate>
      <div>
        <InputField
          label='Name'
          name='name'
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
      </div>

      <div>
        <InputField
          label='Email'
          name='email'
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div>
        <InputField
          label='Password'
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
      </div>

      <div>
        <InputField
          label='Confirm Password'
          name='passwordConfirm'
          type='password'
          value={values.passwordConfirm}
          onChange={handleChange}
          error={errors.passwordConfirm}
        />
      </div>

      <Button
        type='submit'
        className={styles.submitBtn}
        variant='contained'
        color='primary'
      >
        Sign Up
      </Button>
    </form>
  )
}

export default RegisterForm
