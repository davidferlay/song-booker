<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
            <v-card class="elevation-12">
              <v-toolbar dark dense color="primary">
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <slot name="action" />
              </v-toolbar>
              <slot>
                  No content in slot
              </slot>
            </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
