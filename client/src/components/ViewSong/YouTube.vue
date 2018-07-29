<template>
  <panel title="Youtube Video">
    <div class="youtube-video">
      <youtube
        :video-id="youtubeId"
        :player-width="600"
        :player-height="250">
      </youtube>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Vue from 'vue'

Vue.use(VueYouTubeEmbed)

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
 .youtube-video {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
