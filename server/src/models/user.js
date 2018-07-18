const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const hashPassword = (user, options) => {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(function (salt) {
      return bcrypt.hashAsync(user.password, salt, null)
    })
    .then(function (hash) {
      return user.setDataValue('password', hash)
    })
    // Take the user password, hash it and saves it again
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
      // Will return an error if value already exist
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    // console.log(password)
    // console.log(this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
