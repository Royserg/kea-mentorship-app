const User = require('../../models/user')

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res
      .status(404)
      .json({ success: false, error: 'User not found' })
  }

  try {
    const passwordMatch = await user.matchesPassword(password)
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        error: 'Password incorrect'
      })
    } else {
      const token = await user.newAuthToken()
      // Update lastLoggedIn attr
      await user.updateOne({ lastLoggedIn: Date.now() })
      res.status(200).json({
        success: true,
        token,
        user,
        message: 'User authenticated'
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
      message: 'Error while loggin in'
    })
  }
}

module.exports = login
