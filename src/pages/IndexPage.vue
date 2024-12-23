<template>
  <div id="indexPage">
    <div class="banner-area">
      <Banner />
    </div>
    <div class="news-area">
      <News />
    </div>
    <div class="video-area">
      <VideoBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/BannerBar.vue";
import News from "../components/content/NewsBar.vue";
import VideoBar from "../components/content/VideoBar.vue";
</script>

<style scoped>
#indexPage {
  background: linear-gradient(to bottom, #ffffff, #6bc4c3, #37adab);
}
.video-area {
  margin-bottom: 30px;
}
</style>
