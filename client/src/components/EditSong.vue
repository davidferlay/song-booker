<template>
    <v-container grid-list-md text-xs-center>
        <v-layout wrap>
            <v-card-text
            class="h1"
            >Edit your Song here</v-card-text>
        <v-flex d-flex>
            <v-card dark color="secondary">
                <v-card-text class="px-0">Metadata</v-card-text>
                <v-card-text>
                    <v-form name="Song Metadata">
                        <v-text-field
                            label="Title"
                            v-model="song.title"
                            @keyup.native.enter="login"
                            prepend-icon="music_note"
                            autofocus
                            required
                            :rules="[required]"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Artist"
                            v-model="song.artist"
                            prepend-icon="person"
                            required
                            :rules="[required]"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Genre"
                            v-model="song.genre"
                            prepend-icon="equalizer"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album"
                            v-model="song.album"
                            prepend-icon="album"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album Image Url"
                            v-model="song.albumImageUrl"
                            prepend-icon="image"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Youtube Id"
                            v-model="song.youtubeId"
                            prepend-icon="movie"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>

            <v-card dark color="secondary">
                <v-card-text class="px-0">Structure</v-card-text>
                <v-card-text>
                    <v-form name="Song Structure">
                        <v-text-field
                            label="Lyrics"
                            v-model="song.lyrics"
                            prepend-icon="queue_music"
                            textarea
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Tablature"
                            v-model="song.tab"
                            prepend-icon="drag_indicator"
                            textarea
                        ></v-text-field>
                        </v-form>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card>
                <v-card-text>
                    <div class="danger-alert" v-html="error" />
                    <v-btn
                        dark
                        class="cyan"
                        @click="save">
                        Save
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      //   const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.go(-1)
        // this.$router.push({
        //   name: 'song',
        //   params: {
        //     songId: songId
        //   }
        // })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
.h1 {
  font-weight: normal;
  font-size:2rem}

.danger-alert {
    color: red}

</style>
