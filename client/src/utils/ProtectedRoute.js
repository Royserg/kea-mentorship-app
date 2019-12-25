import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from 'context/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const { token } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location, message: 'Please, authenticate', type: 'warning' }
              }}
            />
          )
      }
    />
  )
}

export default ProtectedRoute
