<template>
  <v-flex>
    <panel title="Search" fluid>
      <v-text-field
        label="Search"
        type="Search"
        v-model="search"
        @keyup.native.enter="search"
        prepend-icon="search"
      ></v-text-field>
    </panel>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    // Pass search string as url querry parameter
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
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
