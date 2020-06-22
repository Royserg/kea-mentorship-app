const express = require('express')
const cors = require('cors')

const { SERVER_PORT } = require('../config')
const routes = require('./src/routes')

const app = express()
const PORT = process.env.PORT || SERVER_PORT

// Enable json parser
app.use(express.json())
// Enable cors
app.use(cors())

// Connect all routes to the application
app.use('/', routes)

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))
