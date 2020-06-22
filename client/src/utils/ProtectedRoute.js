import React, { useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from 'context/AuthContext'
import { validateToken } from 'repos/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token, userEmail, logout } = useContext(AuthContext)

  useEffect(() => {
    if (userEmail && token) {
      // Check validity of the token
      validateToken(userEmail, token)
        // Token is valid, doesn't require action
        .then()
        .catch(err => {
          // Token not valid, logout user
          const { status } = err.response
          if (status === 401 || status === 404) {
            logout()
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
                message: 'Please, authenticate',
                type: 'warning'
              }
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
