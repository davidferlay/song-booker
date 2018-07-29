<template>
  <div id="app">
    <v-app id="inspire" toolbar>
      <page-header app></page-header>
        <main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </main>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, Material+Icons;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 0px; */
  margin-top: 40px; /* because of header toolbar */
}
</style>
