<template>
  <div>
    <h1>Register on this page</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
      <br>
      <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
      <br>
      <div class="error" v-html="error" />
      <br>
      <button @click="register">
        Register
      </button>
  </div>
</template>
<!-- v-model = Magic keyword for passing and getting data -->

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
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
.error {
  color:red;
}
</style>
