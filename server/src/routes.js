const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
// Endpoint of get request
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
  // Endpoint of post request
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    // AuthenticationControllerPolicy.login,
    AuthenticationController.login)
}
