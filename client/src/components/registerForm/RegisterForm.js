import React, { useState } from 'react';
import InputField from 'components/inputField/InputField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Feedback from 'components/feedback/Feedback'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  submitBtn: {
    width: 400,
    margin: 8
  }
}))

const RegisterForm = ({ onSubmit }) => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [error, setError] = useState('')
  const [errorOpen, setErrorOpen] = useState(false)

  const showError = (msg) => {
    setError(msg)
    setErrorOpen(true)

    setTimeout(() => setErrorOpen(false), 4000)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      showError('Email cannot be empty');
      return
    }

    if (password !== passwordConfirm) {
      showError('passwords don\'t match');
      return
    }

    // Send data up to Registration component
    onSubmit({ name, email, password })

    // Clear input fields
    setName('')
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
  }

  const styles = useStyles()

  return (
    <form onSubmit={onFormSubmit} className={styles.root}>

      <InputField
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputField
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <InputField
        label='Confirm Password'
        type='password'
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Feedback message={error} open={errorOpen} type='error' />

      <Button
        type='submit'
        className={styles.submitBtn}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>

    </form>
  )
}

export default RegisterForm;