
const logout = async (req, res) => {
  try {
    req.user.token = undefined
    await req.user.save()
    res.status(200).json({ success: true, message: 'User logged out' })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }
}

module.exports = logout
