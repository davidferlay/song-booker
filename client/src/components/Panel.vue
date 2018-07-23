<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark dense color="primary">
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <slot>
                  No content in slot
              </slot>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
// To write your html
// You can insert v- attributes (v-model, v-html and others) here to bind method of script section

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
