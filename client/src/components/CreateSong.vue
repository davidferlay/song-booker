<template>
    <v-container grid-list-md text-xs-center>
        <v-layout wrap>

        <v-flex d-flex>
            <v-card dark color="secondary">
                <v-card-text class="px-0">Song Metadata</v-card-text>
                <v-card-text>
                    <v-form name="Song Metadata">
                        <v-text-field
                            label="Title"
                            v-model="song.title"
                            @keyup.native.enter="login"
                            prepend-icon="person"
                            autofocus
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Artist"
                            v-model="song.artist"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Genre"
                            v-model="song.genre"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album"
                            v-model="song.album"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album Image Url"
                            v-model="song.albumImageUrl"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Youtube Id"
                            v-model="song.youtubeId"
                            prepend-icon="person"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>

            <v-card dark color="secondary">
                <v-card-text class="px-0">Song Structure</v-card-text>
                <v-card-text>
                    <v-form name="Song Structure">
                        <v-text-field
                            label="Lyrics"
                            v-model="song.lyrics"
                            prepend-icon="person"
                            textarea
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Tablature"
                            v-model="song.tab"
                            prepend-icon="person"
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
                        @click="create">
                        Save
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import SongService from '@/services/SongsService'

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
    async create () {
      // Call API
      try {
        await SongService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
