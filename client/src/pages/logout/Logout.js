import React, { useContext, useEffect } from 'react'
import AuthContext from 'context/AuthContext'
import { logoutUser } from 'repos/auth'
import { useHistory } from 'react-router-dom'

const Logout = props => {

  const { logout, userEmail } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    let message = '';
    let type = 'success'
    // Remove token from user in db
    logoutUser(userEmail)
      .then(res => {
        message = res.data.message
      })
      .catch(err => {
        message = 'Issue with token, login again'
        type = 'warning'
      })
      .finally(() => {
        // Remove user data from front-end
        logout()
        history.replace('/login', { message, type })
      })
  }, [logout, userEmail, history])

  return (<></>)
}

export default Logout