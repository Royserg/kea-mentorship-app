import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from 'components/container/Container'
import RegisterForm from 'components/registerForm/RegisterForm';
import { useHistory } from 'react-router-dom'

import { createUser } from 'repos/users'


const Registration = props => {
  const history = useHistory()

  const handleFormSubmit = (userData) => {
    createUser(userData)
      .then(data => {
        if (data.status === 201) {
          history.push('/login', { message: 'Account created', type: 'success' })
        }
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>Sign Up</Typography>

      <RegisterForm
        onSubmit={handleFormSubmit}
      />

    </Container>
  )
}

export default Registration