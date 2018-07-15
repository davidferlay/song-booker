const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
// Endpoint of get request
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
  // Endpoint of post request
  app.post('/register',
    AuthenticationController.register)
}
