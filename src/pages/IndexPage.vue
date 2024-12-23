<template>
  <div id="indexPage">
    <div class="banner-area">
      <Banner />
    </div>
    <div class="news-area">
      <News />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/Banner.vue";
import News from "../components/content/News.vue";
</script>

<style scoped>
#indexPage {
  background: linear-gradient(to bottom, #ffffff, #6bc4c3, #37adab);
}
</style>
