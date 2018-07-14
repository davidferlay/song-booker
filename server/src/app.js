console.log('hello')
// Load module packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Building of express app server
const app = express()
app.use(morgan('combine')) // Log
app.use(bodyParser.json()) // Parse json easily
app.use(cors()) // Ressource request control

app.listen(process.env.PORT || 8081)
