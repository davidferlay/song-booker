<template>
  <div>
    <v-layout>

      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>

    </v-layout>

    <v-layout>

      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6>
        <lyrics :song="song" />
      </v-flex>

    </v-layout>

  </div>
</template>
// In here, v-layout is a raw, v-flex is each column of that row
// Sub components called : song-metadata, you-tube, tab, lyrics

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

 <style scoped>
</style>
