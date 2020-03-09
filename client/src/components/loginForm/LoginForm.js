import React from 'react'
import InputField from 'components/inputField/InputField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import useForm from 'hooks/useForm'
import validate from './LoginFormValidation'

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

const LoginForm = ({ onSubmit }) => {
  const initValues = {
    email: '',
    password: ''
  }

  const { values, errors, handleSubmit, handleChange } = useForm(
    initValues,
    onFormSubmit,
    validate
  )

  function onFormSubmit () {
    const { email, password } = values
    // Send data to Login component
    onSubmit({ email, password })
  }

  const styles = useStyles()

  return (
    <form onSubmit={handleSubmit} className={styles.root} noValidate>
      <InputField
        label='Email'
        name='email'
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label='Password'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Button
        type='submit'
        className={styles.submitBtn}
        variant='contained'
        color='primary'
      >
        Sign in
      </Button>
    </form>
  )
}

export default LoginForm
