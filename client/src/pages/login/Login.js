import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from 'components/container/Container'
import LoginForm from 'components/loginForm/LoginForm';
import Feedback from 'components/feedback/Feedback';

import { authorize } from 'repos/auth'
import AuthContext from 'context/AuthContext'

const Login = props => {
  const { login } = useContext(AuthContext)
  const { state } = useLocation()
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const [feedbackType, setFeedbackType] = useState('')
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  const showFeedback = (msg, type) => {
    setFeedbackMsg(msg)
    setFeedbackType(type)
    setFeedbackOpen(true)

    setTimeout(() => setFeedbackOpen(false), 1000)
  }

  const handleFormSubmit = (loginData) => {
    authorize(loginData)
      .then(({ data }) => {
        if (data.token) {
          login(data.token, data.user.email)
        }
      })
      .catch(err => {
        if (err.response) {
          showFeedback(err.response.data.error, 'error')
        }
      })
  }

  useEffect(() => {
    if (state) {
      const { message, type } = state
      showFeedback(message, type)
    }
  }, [state])

  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>Login</Typography>

      <LoginForm
        onSubmit={handleFormSubmit}
      />
      {feedbackOpen &&
        <Feedback message={feedbackMsg} type={feedbackType} open={feedbackOpen} />
      }
    </Container>
  )
}

export default Login