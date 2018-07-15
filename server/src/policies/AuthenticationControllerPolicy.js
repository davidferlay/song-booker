const Joi = require('Joi')
// Load Joi framework used for validation

module.exports = {
  register (req, res, next) {
    // function that takes request, result, next thing
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}')
      )
    }

    const {error} = Joi.validate(req.body, schema)
    // Entry gets validated agains schema defined or shows errors
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match the following rules :
            <br>
            1. It must contains only letters and numbers. No special character.
            <br>
            2. It must be at least 8 to 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    // Is gonna go hit the next line of the register endpoint in routes.js
    }
  }
}
