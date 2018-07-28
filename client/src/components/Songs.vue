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

                <div
                  class="song" 
                  v-for="song in songs"
                  :key="song.id">
                  <v-layout>

                    <v-flex xs6>
                      <div class="song-title">
                        {{song.title}}
                      </div>
                      <div class="song-artist">
                        {{song.artist}}
                      </div>
                      <div class="song-genre">
                        {{song.genre}}
                      </div>
                      <v-btn
                          dark
                          class="cyan"
                          @click="navigateTo({
                            name: 'song',
                            params: {
                              songId: song.id
                            }
                          })">
                          See
                      </v-btn>
                    </v-flex>

                    <v-flex xs6>
                      <img class="album-image" 
                      :src="song.albumImageUrl">
                    </v-flex>

                  </v-layout>
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
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
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
}
</style>
