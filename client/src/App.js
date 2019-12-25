import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import ProtectedRoute from 'utils/ProtectedRoute'
import Login from 'pages/login/Login'
import Registration from 'pages/registration/Registration'
import Home from 'pages/home/Home'
import Logout from 'pages/logout/Logout'

import AuthContext from 'context/AuthContext'
import './App.css'


const App = () => {
  const [token, setToken] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  // Triggered when refresh happens => read info from localStorage
  useEffect(() => {
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    if (email && token) {
      setUserEmail(email)
      setToken(token)
    }
  }, [])

  const login = (token, userEmail) => {
    setToken(token)
    setUserEmail(userEmail)
    localStorage.setItem('token', token)
    localStorage.setItem('email', userEmail)
  }

  const logout = () => {
    setToken(null)
    setUserEmail(null)
    localStorage.clear()
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ token, userEmail, login, logout }}
      >
        <Navigation />

        <Switch>
          {token && <Redirect exact from='/login' to='/' />}
          {token && <Redirect exact from='/register' to='/' />}

          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Registration} />

          <ProtectedRoute path='/' exact component={Home} />
          <ProtectedRoute path='/logout' exact component={Logout} />

          {/* Default fallback Route */}
          <ProtectedRoute path='/' component={Home} />
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App
