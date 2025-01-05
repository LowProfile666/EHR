<template>
  <div id="indexPage">
    <div class="banner-area">
      <Banner v-if="banners.length > 0" :data="banners" />
      <a-spin v-else class="banner-spin" size="large" />
    </div>
    <div class="news-area">
      <News v-if="news.length > 0" :data="news" />
      <a-spin v-else class="news-spin" size="large" />
    </div>
    <div class="video-area">
      <VideoBar />
    </div>
    <div class="talent-area">
      <TalentServiceBar />
    </div>
    <div class="flexwork-area">
      <FlexworkBar />
    </div>
    <div class="solution-area">
      <p class="title">解决方案</p>
      <a-divider />
      <!--      <SolutionBar />-->
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/BannerBar.vue";
import News from "../components/content/NewsBar.vue";
import VideoBar from "../components/content/VideoBar.vue";
import SolutionBar from "../components/content/SolutionBar.vue";
import { onMounted, ref } from "vue";
import { getBannerArticles, getNewsArticles } from "../api";
import TalentServiceBar from "../components/content/TalentServiceBar.vue";
import FlexworkBar from "../components/content/FlexworkBar.vue";

const banners = ref([]);
const news = ref([]);

const getBanners = () => {
  getBannerArticles().then((res) => {
    banners.value = res.data;
  });
};

const getNews = () => {
  getNewsArticles().then((res) => {
    news.value = res.data;
  });
};
onMounted(() => {
  getBanners();
  getNews();
});
</script>

<style scoped>
#indexPage {
  background-color: #efefef;
}
.title {
  text-align: center;
  color: black;
  font-size: 25px;
  margin-bottom: 20px;
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
.talent-area {
  margin-bottom: 30px;
}
.flexwork-area {
  margin-bottom: 30px;
}

.banner-spin {
  width: 100%;
  height: 90vh;
  position: relative;
  align-content: center;
}
.news-spin {
  width: 100%;
  height: 50vh;
  position: relative;
  align-content: center;
}
</style>
