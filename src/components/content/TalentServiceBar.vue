<template>
  <div class="page-container" id="talentServiceBar">
    <!-- 背景固定显示的区域 -->
    <div
      ref="targetSection"
      :class="['background-section', { 'background-visible': isVisible }]"
    >
      <div class="text-area">
        <p class="title">{{ barTitle }}</p>
        <p class="description">
          {{ barDescription }}
        </p>
      </div>
      <div class="content">
        <a-row :gutter="30">
          <a-col span="auto" v-for="item in cardObjs" :key="item.id">
            <a-card
              class="content-card"
              :bordered="false"
              @click="to(item.detailUrl)"
            >
              <img :alt="item.title" :src="item.src" width="100px" />
              <p>{{ item.title }}</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

interface cardObj {
  id: number;
  title: string;
  description: string;
  src: string;
}

const isVisible = ref(false); // 控制背景显现的状态
const targetSection = ref(null); // 目标区域的 DOM 引用
const barTitle = ref("劳务");
const barDescription = ref(
  "劳务服务涵盖劳务挂靠、产线外包、劳务派遣、代招聘、饭堂外包、绿化外包等多元化业务，通过专业化管理和灵活的用工模式，为企业提供高效、可靠的解决方案，助力企业降低运营成本、优化资源配置，实现专注核心业务发展和提升竞争力的目标。",
);
const cardObjs = ref<cardObj[]>([
  {
    id: 1,
    title: "劳务挂靠",
    description: "",
    src: "/src/assets/images/talent/猎头.png",
  },
  {
    id: 2,
    title: "产线外包",
    description: "",
    src: "/src/assets/images/talent/代理招聘.png",
  },
  {
    id: 3,
    title: "劳务派遣",
    description: "",
    src: "/src/assets/images/talent/劳务派遣.png",
  },
  {
    id: 4,
    title: "代招聘",
    description: "",
    src: "/src/assets/images/talent/人事挂靠.png",
  },
  {
    id: 5,
    title: "饭堂",
    description: "",
    src: "/src/assets/images/talent/劳务派遣.png",
  },
  {
    id: 6,
    title: "绿化",
    description: "",
    src: "/src/assets/images/talent/劳务派遣.png",
  },
]);

// 监听滚动事件
const handleScroll = () => {
  if (!targetSection.value) return;

  const rect = targetSection.value.getBoundingClientRect();
  // 判断目标区域是否进入到可视区域
  isVisible.value = rect.top < window.innerHeight && rect.bottom > 0;
};

// 注册和注销滚动事件监听器
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
#talentServiceBar {
  width: 100%;
}

/* 页面整体样式 */
.page-container {
  font-family: Arial, sans-serif;
}

/* 背景固定区域 */
.background-section {
  min-height: 90vh;
  color: white;
  font-size: 24px;
  text-align: center;
  transition: background 0.5s ease; /* 添加背景显示的过渡效果 */
}

/* 背景默认状态 */
.background-section {
  background: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 背景固定效果 */
}

/* 背景显现状态 */
.background-visible {
  background-image: url("/src/assets/images/talent/bg.png"); /* 替换为你的背景图片 URL */
  background-color: rgba(0, 0, 0, 0.5); /* 可以叠加一层透明色 */
}

.text-area {
  width: 100%;
  text-align: left;
}

.title {
  width: 50%;
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 50px 0 0 10%;
}

.description {
  width: 50%;
  color: white;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 20px;
  padding: 30px 0 0 10%;
}

.content {
  width: 80%;
  padding: 80px 0 20px 10%;
}

.content-card {
  background: none;
  color: gray;
}

.content-card:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition-duration: 0.3s;
  color: white;
}
</style>
