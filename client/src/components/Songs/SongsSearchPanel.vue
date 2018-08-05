<template>
  <v-flex>
    <panel title="Search" fluid>
      <v-text-field
        label="Search by song title, artist, album, or genre"
        type="Search"
        v-model="search"
        prepend-icon="search"
      ></v-text-field>
    </panel>
  </v-flex>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  // Pass search string as url querry parameter
  watch: {
    // search (value) {
    search: _.debounce(async function (value) {
    // Debounce used to prevent query flood
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    // },
    }, 700),
    '$route.query.search': {
      // Watch url and pass query parameter as search string
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
