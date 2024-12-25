<template>
  <div id="solutionBar">
    <p class="title">{{ barTitle }}</p>
    <a-divider />
    <div class="solution-swiper">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons-vue";

interface solutionObj {
  id: string;
  title: string;
  description: string;
  src: string;
  detail: string;
}

const modules = [Autoplay, Pagination, Navigation, A11y];
const barTitle = ref<string>("解决方案");
const solutions = ref<solutionObj[]>([
  {
    id: "1",
    title: "招聘流程外包",
    description: "湖北睿才始于2005年在湖北荆门成立，",
    src: "/src/assets/images/solution/001.svg",
    detail: "/detail/1",
  },
  {
    id: "2",
    title: "企业培训服务",
    description: "我们提供系统的企业培训解决方案，帮助企业提升员工技能。",
    src: "/src/assets/images/solution/002.svg",
    detail: "/detail/2",
  },
  {
    id: "3",
    title: "人力资源咨询",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
  {
    id: "4",
    title: "薪酬管理服务",
    description: "提供全面的薪酬管理方案，确保企业薪酬制度的合理性。",
    src: "/src/assets/images/solution/004.svg",
    detail: "/detail/4",
  },
  {
    id: "5",
    title: "员工关系管理",
    description: "帮助企业建立良好的员工关系，提升团队凝聚力。",
    src: "/src/assets/images/solution/005.svg",
    detail: "/detail/5",
  },
]);
</script>

<style scoped>
#solutionBar {
  width: 80vw;
  margin: 0 auto;
}
.title {
  text-align: center;
  color: black;
  font-size: 25px;
  margin-bottom: 20px;
}

.solution-swiper {
  width: 100%;
  height: 450px;
}

.swiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.swiper-slide {
  background: #fff;
  width: 21.5% !important;
  height: 90%;
  padding: 20px 10px 10px;
  border-radius: 10px;
  user-select: none;
}

.swiper-slide:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.content-cover {
  width: 100%;
  height: 50%;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
}

.content-cover img {
  width: 100%;
}

a {
  text-decoration: none;
  color: unset;
}

.content-title {
  font-size: 20px;
  color: #333947;
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: 400;
}
.content-description {
  font-size: 14px;
  color: #464d61;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  overflow: hidden;
}
</style>
