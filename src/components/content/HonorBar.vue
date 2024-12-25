<template>
  <div id="honorBar">
    <p class="title">{{ barTitle }}</p>
    <a-divider />
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
    >
      <swiper-slide v-for="item in images" :key="item.id"
        ><img :src="item.src" :alt="item.title" />
        <p class="image-title">{{ item.title }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { ref } from "vue";

interface imageObj {
  id: string;
  title: string;
  src: string;
}

const modules = [Autoplay, Pagination, Navigation, A11y, EffectCoverflow];
const barTitle = ref<string>("公司荣誉");
const images = ref<imageObj[]>([
  {
    id: "1",
    title: "营业执照",
    src: "/src/assets/images/honor/1睿才人力营业执照.jpg",
  },
  {
    id: "2",
    title: "东宝分公司",
    src: "/src/assets/images/honor/2东宝分公司.jpg",
  },
  {
    id: "3",
    title: "掇刀分公司",
    src: "/src/assets/images/honor/3掇刀分公司.jpg",
  },
  {
    id: "4",
    title: "人力资源服务许可证",
    src: "/src/assets/images/honor/4人力资源服务许可证.jpg",
  },
  {
    id: "5",
    title: "劳务派遣许可证",
    src: "/src/assets/images/honor/5劳务派遣许可证.jpg",
  },
  {
    id: "6",
    title: "全职联优秀人才服务机构证书",
    src: "/src/assets/images/honor/6全职联优秀人才服务机构证书.jpg",
  },
]);
</script>

<style scoped>
#honorBar {
  width: 80vw;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: black;
  font-size: 25px;
}

.swiper {
  width: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  background-color: unset;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.image-title {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  overflow: hidden;
}
</style>
