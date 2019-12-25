const users = require('express').Router()

const getAll = require('./getAll')
const saveOne = require('./saveOne')
const me = require('./me')

const authenticate = require('../../middleware/auth')

// Get all users
users.get('/', authenticate, getAll)
// Get info about logged in user
users.get('/me', authenticate, me)
// Create new user
users.post('/', saveOne)

module.exports = users
