import React, { useState } from 'react';
import InputField from 'components/inputField/InputField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


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

const LoginForm = ({ onSubmit }) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()

    // Send data to Login component
    onSubmit({ email, password })

    // Clear input fields
    setEmail('')
    setPassword('')
  }

  const styles = useStyles()

  return (
    <form onSubmit={onFormSubmit} className={styles.root}>

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

      <Button
        type='submit'
        className={styles.submitBtn}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>

    </form>
  )
}

export default LoginForm;