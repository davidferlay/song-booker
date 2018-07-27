<template>
    <v-container grid-list-md text-xs-center>
        <v-layout wrap>
            
        <v-flex d-flex>
            <v-card dark color="secondary">
                <v-card-text class="px-0">left</v-card-text>
                <v-card-text>
                    <v-form
                    name="Song Metadata">
                        <v-text-field
                            label="Title"
                            v-model="title"
                            @keyup.native.enter="login"
                            prepend-icon="person"
                            autofocus
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Artist"
                            v-model="artist"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Genre"
                            v-model="genre"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album"
                            v-model="album"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Album Image Url"
                            v-model="albumImageUrl"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Youtube Id"
                            v-model="youtubeId"
                            prepend-icon="person"
                        ></v-text-field>
                        <br>
   
   
                    </v-form>
                </v-card-text>
            </v-card>

            <v-card dark color="primary">
               <v-card-text class="px-0">right</v-card-text>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card dark color="primary">
                <v-card-text class="px-0">bottom</v-card-text>

                <v-card-text>
                    <br>
                        <div class="danger-alert" v-html="error" />
                    <br>
                    <v-btn
                        dark
                        class="cyan"
                        @click="login">
                        Login
                    </v-btn>
                </v-card-text>

            </v-card>
        </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
