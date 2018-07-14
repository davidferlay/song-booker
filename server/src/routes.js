module.exports = (app) => {
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
}
