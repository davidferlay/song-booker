console.log('hello')
// Load module packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Building of express app server
const app = express()
app.use(morgan('combined')) // Log
app.use(bodyParser.json()) // Parse json easily
app.use(cors()) // Ressource request control

// Endpoint of get request
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// Endpoint of post request
app.post('/register', (req, res) => {
  res.send({
    message: 'Hello $(req.body.email}! Registeration successful! Have fun!'
  })
})

// Browser access
app.listen(process.env.PORT || 8081)
