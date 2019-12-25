const User = require('../../models/user')

const saveOne = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = new User({ name, email, password })
    const result = await user.save()

    res
      .status(201)
      .json({ success: true, result })
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        error
      })
  }
}

module.exports = saveOne
