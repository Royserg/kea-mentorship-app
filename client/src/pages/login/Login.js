import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Container from 'components/container/Container'
import LoginForm from 'components/loginForm/LoginForm'

import { authorize } from 'repos/auth'
import AuthContext from 'context/AuthContext'
import ToastContext from 'context/ToastContext'

const Login = props => {
  const { login } = useContext(AuthContext)
  const { showToast } = useContext(ToastContext)
  const { state } = useLocation()

  const displayToast = (msg, type) => {
    showToast(msg, type)
  }

  const handleFormSubmit = loginData => {
    authorize(loginData)
      .then(({ data }) => {
        if (data.token) {
          login(data.token, data.user.email)
        }
      })
      .catch(err => {
        if (err.response) {
          displayToast(err.response.statusText, 'error')
        }
      })
  }

  useEffect(() => {
    if (state) {
      const { message, type } = state
      displayToast(message, type)
    }
  }, [state])

  return (
    <Container>
      <Typography variant='h3' component='h3' gutterBottom>
        Login
      </Typography>

      <LoginForm onSubmit={handleFormSubmit} />
    </Container>
  )
}

export default Login
