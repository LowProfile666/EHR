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
        ><img class="slide-img" :src="slide.coverUrl" :alt="slide.title" />
        <div class="swiper-info">
          <div class="info-title">{{ slide.title }}</div>
          <div class="info-desc">{{ slide.description }}</div>
          <div class="info-detail-button">
            <a-button
              ghost
              size="large"
              @click="detail(slide.id, slide.detailUrl)"
              >点击查看详情</a-button
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules"; // 分页器
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

interface Slide {
  id: string;
  src: string;
  title: string;
  description: string;
}

const props = defineProps({
  data: {
    type: Array,
  },
});

const modules = [Autoplay, Pagination, Navigation, A11y];
const slides = ref<Slide[]>(props.data);
const router = useRouter();

const detail = (id, url) => {
  router.push({ name: "Detail", params: { id, url } });
};
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
