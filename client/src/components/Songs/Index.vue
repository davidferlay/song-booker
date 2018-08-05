<template>
  <v-layout>
    <v-flex>
      <songs-search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend to list all songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
}
.song-title {
  font-weight: normal;
  font-size: 30px;
}
.song-artist {
  font-weight: normal;
  font-size: 24px;
}
.song-genre {
  font-weight: normal;
  font-size: 18px;
}
.album-image {
  width: 75%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
