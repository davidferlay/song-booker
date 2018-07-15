<template>
  <div>
  </div>
</template>
// To write your html
// You can insert v- attributes (v-model, v-html and others) here to bind method of script section

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is your bare template component! Update me as you like.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
