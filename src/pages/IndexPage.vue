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
    <div class="ehrsolution-area">
      <EhrSolutionBar />
    </div>
    <div class="flexwork-area">
      <FlexworkBar />
    </div>
    <div class="enterprise-area">
      <EnterpriseManagementBar />
    </div>
    <div class="talent-area">
      <TalentServiceBar />
    </div>
    <div>
      <HeadhunterBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/BannerBar.vue";
import News from "../components/content/NewsBar.vue";
import VideoBar from "../components/content/VideoBar.vue";
import { onMounted, ref } from "vue";
import { getBannerArticles, getNewsArticles } from "../api";
import TalentServiceBar from "../components/content/TalentServiceBar.vue";
import FlexworkBar from "../components/content/FlexworkBar.vue";
import EhrSolutionBar from "../components/content/EhrSolutionBar.vue";
import EnterpriseManagementBar from "../components/content/EnterpriseManagementBar.vue";
import HeadhunterBar from "../components/content/HeadhunterBar.vue";

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

.banner-area {
  margin-bottom: 30px;
}
.news-area {
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
.video-area {
  margin: 0;
}
.title {
  text-align: center;
  color: black;
  font-size: 25px;
}
</style>
