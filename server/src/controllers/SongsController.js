
const {Song} = require('../models')

module.exports = {
  // Endpoint to get song items using index method
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  // Endpoint to get song page data using show method
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to fetch the song data'
      })
    }
  },
  // Enpoint to create song items using post method
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
  },
  // Enpoint to update song items using put method
  async put (req, res) {
    try {
      console.log('We are here #1')
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      console.log('We are here #2', err)
      res.status(500).send({
        error: 'An error has occured trying to update the song'
      })
    }
  }
}
