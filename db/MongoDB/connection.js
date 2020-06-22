const mongoose = require('mongoose')

const { DB_PASSWORD, DB_USERNAME, DB_NAME } = require('../../config')

const dbUri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-wf85b.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('> error occured from the database')
})
db.once('open', () => {
  console.log('> successfully connected to database')
})

module.exports = mongoose
