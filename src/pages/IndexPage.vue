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
    <div class="honor-area">
      <HonorBar />
    </div>
    <div class="solution-area">
      <SolutionBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/BannerBar.vue";
import News from "../components/content/NewsBar.vue";
import VideoBar from "../components/content/VideoBar.vue";
import HonorBar from "../components/content/HonorBar.vue";
import SolutionBar from "../components/content/SolutionBar.vue";
</script>

<style scoped>
#indexPage {
  background-color: #efefef;
}
.banner-area {
  margin-bottom: 30px;
}
.news-area {
  margin-bottom: 30px;
}
.video-area {
  margin-bottom: 30px;
}
.honor-area {
  margin-bottom: 30px;
}
</style>
