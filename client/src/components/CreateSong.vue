<template>
    <v-container grid-list-md text-xs-center>
        <v-layout wrap>
            
        <v-flex d-flex>
            <v-card dark color="primary">
                <v-card-text class="px-0">left</v-card-text>
            </v-card>

            <v-card dark color="primary">
               <v-card-text class="px-0">right</v-card-text>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card dark color="primary">
            <v-card-text class="px-0">bottom</v-card-text>
            </v-card>
        </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
