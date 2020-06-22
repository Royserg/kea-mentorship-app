const User = require('../../models/user')

const getAll = async (req, res) => {
  const users = await User.find({})

  res.json(users)
}

module.exports = getAll
