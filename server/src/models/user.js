const { hash, compare } = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET, TOKEN_EXPIRATION } = require('../../../config')

const mongoose = require('../../../db')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
    lastLoggedIn: Date,
    token: String
  },
  {
    timestamps: true // it creates createdAt and updatedAt automatically
  }
)

// Hash user's password before adding to mongodb
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10)
  }
})

// Method that can be called on every instance of a User
// `this` refers to the User that method is called on
userSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password)
}

// Removes sensitive properties when sending back user data
userSchema.methods.toJSON = function () {
  const user = this
  const userObj = user.toObject()

  delete userObj.password
  delete userObj.token

  return userObj
}

// Creates token and saves it into db
userSchema.methods.newAuthToken = async function () {
  const user = this

  // Generate token
  const payload = { id: user._id.toString() }
  const token = jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRATION
  })

  user.token = token

  await user.save()
  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User
