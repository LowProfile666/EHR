<template>
  <div class="swiper-box">
    <swiper
      class="banner-swiper"
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index"
        ><img class="slide-img" :src="slide.src" :alt="slide.title" />
        <div class="swiper-info">
          <div class="info-title">{{ slide.title }}</div>
          <div class="info-desc">{{ slide.description }}</div>
          <div class="info-detail-button">
            <a-button ghost size="large">点击查看详情</a-button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from "swiper"; // 分页器
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";

const modules = [Autoplay, Pagination, Navigation, A11y];
interface Slide {
  id: string;
  src: string;
  title: string;
  description: string;
}

const slides = ref<Slide[]>([
  {
    id: "1",
    src: "/src/assets/images/banner/banner01.jpg",
    title: "Banner 1",
    description: "Description for Banner 1",
  },
  {
    id: "2",
    src: "/src/assets/images/banner/banner01.gif",
    title: "Banner 2",
    description: "Description for Banner 2",
  },
  {
    id: "3",
    src: "/src/assets/images/banner/banner02.gif",
    title: "Banner 3",
    description: "Description for Banner 3",
  },
  {
    id: "4",
    src: "/src/assets/images/banner/banner03.gif",
    title: "Banner 4",
    description: "Description for Banner 4",
  },
  {
    id: "5",
    src: "/src/assets/images/banner/banner03.jpg",
    title: "Banner 5",
    description: "Description for Banner 5",
  },
]);
</script>

<style scoped>
.swiper-box {
  height: 90vh;
  position: relative;
}

.banner-swiper {
  height: 100%;
}

.slide-img {
  width: 100%; /* 图片宽度为容器宽度 */
  height: 100%; /* 图片高度为容器高度 */
  object-fit: cover;
  object-position: center; /* 图片居中对齐 */
}

.swiper-info {
  position: absolute;
  top: 50%; /* 距离顶部 50% */
  left: 50%; /* 距离左侧 50% */
  transform: translate(-50%, -50%); /* 将自身中心对齐到父容器中心 */
  z-index: 10; /* 确保内容显示在轮播图上方 */
  text-align: center; /* 文本居中对齐 */
  color: #fff; /* 文字颜色为白色，方便显示 */
}

.info-title {
  font-size: 2rem; /* 标题字体大小 */
  font-weight: bold;
}

.info-desc {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.info-detail-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}
</style>
