const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { TOKEN_SECRET } = require('../../../config')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer', '').trim()

    const { email } = req.method === 'GET' ? req.query : req.body

    const decoded = jwt.verify(token, TOKEN_SECRET)
    const user = await User.findOne({ _id: decoded.id, token, email })

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: 'User not found' })
    }
    // Attach information to request
    req.token = token
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .json({ success: false, error: error })
  }
}

module.exports = auth
