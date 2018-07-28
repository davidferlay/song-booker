<template>
  <v-app id="inspire">
    <v-content>
            <panel title="Songs">
                <v-btn
                  slot="action"
                  @click="navigateTo({name: 'songs-create'})"
                  class="blue"
                  dark
                  absolute
                  right
                  middle
                  mt-3
                  fab>
                  <v-icon>add</v-icon>
                </v-btn>
                <div v-for="song in songs"
                  :key="song.id">
                  {{song.title}} -
                  {{song.artist}} -
                  {{song.album}}
                </div>
            </panel>
    </v-content>
  </v-app>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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

</style>
