<template>
  <v-toolbar dark dense color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">
        <router-link
        class="home"
        tag="span"
        :to="{
            name: 'root'
        }">
        Songbooker
        </router-link>

        <v-btn
            flat
            dark
            router
            to="/"
            >Home
        </v-btn>

    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn
            flat
            dark
            router
            to="#"
            >Browse
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            router
            to="login"
            >Login
        </v-btn>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            router
            to="register"
            >Sign Up
        </v-btn>

        <!-- <v-btn icon>
        <v-icon>search</v-icon>
        </v-btn> -->

    </v-toolbar>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'XXX'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor:pointer;
}
</style>
