const auth = require('express').Router()

const login = require('./login')
const logout = require('./logout')

const authenticate = require('../../middleware/auth')

auth.post('/', login)
auth.post('/logout', authenticate, logout)

module.exports = auth
