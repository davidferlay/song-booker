<template>
      <v-container>
        <v-layout>
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
