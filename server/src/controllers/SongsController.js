
const {Song} = require('../models')

module.exports = {
  // 1st endpoint to get song items
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  // 2nd endpoint to create song items
  async post (req, res) {
    try {
      console.log('We are here #1')
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      console.log('We are here #2', err)
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  }
}
