<template>
  <div id="solutionBar">
    <div class="solution-swiper">
      <swiper
        :breakpoints="breakpoints"
        :spaceBetween="20"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :modules="modules"
      >
        <swiper-slide v-for="item in solutions" :key="item.id">
          <div class="content-cover">
            <a :href="item.detail">
              <img :src="item.src" :alt="item.title" />
            </a>
          </div>
          <div class="content-title">
            <a :href="item.detail">{{ item.title }}</a>
          </div>
          <div class="content-description">
            <a :href="item.detail">
              {{ item.description }}
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

interface solutionObj {
  id: string;
  title: string;
  description: string;
  src: string;
  detail: string;
}

const props = defineProps({
  data: {
    type: Array,
  },
});

const modules = [Autoplay, Pagination, Navigation, A11y];
const solutions = ref<solutionObj[]>(props.data);

// Swiper 的响应式断点设置
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};
</script>

<style scoped>
#solutionBar {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.solution-swiper {
  width: 100%;
  height: auto;
}

.swiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.swiper-slide {
  height: auto;
  background: #fff;
  border-radius: 10px;
  user-select: none;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.swiper-slide:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content-cover {
  width: 100%;
  height: 200px; /* 调整高度 */
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: unset;
}

.content-title {
  font-size: 18px;
  color: #333947;
  font-weight: 500;
  text-align: center;
  margin: 10px 0;
}

.content-description {
  width: 100%;
  font-size: 14px;
  color: #464d61;
  line-height: 1.5em;
  text-align: justify; /* 调整为两端对齐 */
  padding: 0 10px;
  word-wrap: break-word; /* 支持长文字换行 */
}
</style>
