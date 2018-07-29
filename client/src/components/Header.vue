<template>
  <v-toolbar fixed dark dense color="primary">
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
            :to="{ name: 'root' }"
            >Home
        </v-btn>

    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn
            flat
            dark
            :to="{ name: 'songs' }"
            >Songs
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            router
            :to="{ name: 'login' }"
            >Login
        </v-btn>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            router
            :to="{ name: 'register' }"
            >Sign Up
        </v-btn>
        <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat
            dark
            @click="logout"
            >Log Out
        </v-btn>

        <!-- <v-btn icon>
        <v-icon>search</v-icon>
        </v-btn> -->

    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor:pointer;
}
</style>
