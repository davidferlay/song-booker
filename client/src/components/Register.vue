<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark dense color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form
                    name="Songbooker register form">
                    <v-text-field
                      label="Email"
                      v-model="email"
                      type="email"
                      prepend-icon="person"
                      class="field">
                      autofocus
                    </v-text-field>
                    <br>
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      prepend-icon="lock"
                      autocomplete="new-password"
                      class="field">
                    </v-text-field>
                  </v-form>
                <br>
                <div class="danger-alert" v-html="error" />
                <br>
                <v-btn
                  dark
                  class="cyan"
                  @click="register">
                  Register
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
</style>
