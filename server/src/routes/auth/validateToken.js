const validateToken = (req, res) => {
  if (req.user && req.token) {
    res.json({ success: true, message: 'Token is valid' })
  } else {
    res.status(401).json({ success: false, message: 'Token not valid' })
  }
}

module.exports = validateToken
