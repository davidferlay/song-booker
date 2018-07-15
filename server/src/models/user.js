module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
      // Will return an error if value already exist
    },
    password: DataTypes.STRING
  })
