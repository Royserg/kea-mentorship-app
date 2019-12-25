const routes = require('express').Router()
const users = require('./users')
const auth = require('./auth')

// Connect users routes
routes.use('/api/users', users)

// Connect auth routes
routes.use('/api/auth', auth)

// Fallback route
routes.get('*', (req, res) => {
  res.status(404).send('Wrong path')
})

module.exports = routes
