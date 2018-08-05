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

}
</script>

<style scoped>

</style>
