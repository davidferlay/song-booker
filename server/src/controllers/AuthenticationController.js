
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Helper function to sign the user object using the jwt library and gives us back a jwt token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email already used'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      // Line bellow to check if user exists
      // console.log('user', user.toJSON())
      if (!user) {
        return res.status(403).send({
          error: 'Login info is incorrect'
        })
      }
      // Password is valid (true) if entry matches db value
      const isPasswordValid = password === user.password
      // console.log(isPasswordValid)
      // console.log(password, user.password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password info is incorrect'
        })
      }

      const userJSON = user.toJSON()
      // console.log(userJSON)
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
