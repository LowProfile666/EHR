<template>
  <div id="indexPage">
    <Banner :slides="bannerSlides" :autoplay="true" :interval="4000" />
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/content/Banner.vue";

const bannerSlides = [
  {
    title: "欢迎来到我们的平台",
    description: "在这里您可以找到最好的产品和服务。",
    backgroundImage: "https://via.placeholder.com/1200x400?text=Slide+1",
    buttonText: "了解更多",
  },
  {
    title: "探索更多可能",
    description: "我们的解决方案让您的生活更简单。",
    backgroundImage: "https://via.placeholder.com/1200x400?text=Slide+2",
    buttonText: "立即开始",
  },
  {
    title: "加入我们",
    description: "和我们一起创造一个更加美好的未来。",
    backgroundImage: "https://via.placeholder.com/1200x400?text=Slide+3",
    buttonText: "联系我们",
  },
];
</script>

<style scoped>
#indexPage {
  height: 1000px;
  background-color: lightgray;
}
</style>
