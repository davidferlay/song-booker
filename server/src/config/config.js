module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'songbooker',
    user: process.env.DB_USER || 'songbooker',
    password: process.env.DB_PASS || 'songbooker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './songbooker.sqlite'
      // process.env. expressions allows for override with fallback value after double pipe
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
// Signs the jwt tokens with secret string
