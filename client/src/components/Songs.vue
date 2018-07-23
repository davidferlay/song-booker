<template>
  <v-app id="inspire">
    <v-content>
            <panel title="Songs">
                <div v-for="song in songs"
                  :key="song.title">
                  {{song.title}} -
                  {{song.artist}} -
                  {{song.album}}
                </div>
            </panel>
    </v-content>
  </v-app>
</template>
// To write your html
// You can insert v- attributes (v-model, v-html and others) here to bind method of script section

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
        title: 'Float on',
        artist: 'Modest Mouse',
        album: 'Good news'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
