<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 600px;
  height: 600px;
  padding: 40px;
  font-family: monospace;
  border-color: transparent;
  border: none;
  border-style: none;
  overflow: auto;
}
</style>
