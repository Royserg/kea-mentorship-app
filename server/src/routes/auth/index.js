const auth = require('express').Router()

const login = require('./login')
const logout = require('./logout')
const validateToken = require('./validateToken')

const authenticate = require('../../middleware/auth')

auth.post('/', login)
auth.post('/logout', authenticate, logout)
auth.post('/token', authenticate, validateToken)

module.exports = auth
