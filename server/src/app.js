console.log('hello')
// Load module packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')
const morgan = require('morgan')

// Building of express app server
const app = express()
app.use(morgan('combined')) // Log
app.use(bodyParser.json()) // Parse json easily
app.use(cors()) // Ressource request control

// Call for routes.js
require('./routes')(app)

// DB mapping
// Set to true and save to clean database
sequelize.sync({force: false})
  .then(() => {
    // Browser access
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
