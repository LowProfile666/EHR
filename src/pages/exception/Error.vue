<template>
  <div id="error">
    <!-- 图片部分 -->
    <img
      src="/src/assets/images/exception/500.png"
      alt="500 Server Error"
      class="server-error"
    />
    <!-- 文字提示 -->
    <div class="content">
      <h1 class="title">服务器错误</h1>
      <p class="description">抱歉，服务器出现了问题，请稍后再试</p>
      <button class="back-button" @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入 Vue Router
import { useRouter } from "vue-router";

const router = useRouter();

// 返回首页
const goHome = () => {
  router.push({ path: "/" }); // 跳转到首页
};
</script>

<style scoped>
/* 主容器样式 */
#error {
  width: 100%;
  min-height: 500px;
  height: 90vh;
  display: flex;
  flex-direction: column; /* 垂直布局 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center;
  padding: 20px; /* 增加内边距，防止内容贴边 */
  box-sizing: border-box;
}

/* 图片样式 */
.server-error {
  max-width: 400px; /* 限制图片的最大宽度 */
  width: 80%; /* 自适应宽度 */
  height: auto; /* 保持图片比例 */
  margin-bottom: 20px; /* 图片与文字之间的间距 */
}

/* 文本标题样式 */
.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* 描述文字样式 */
.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5; /* 增加行高，改善可读性 */
}

/* 按钮样式 */
.back-button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #f56c6c; /* 红色按钮，符合错误状态 */
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.back-button:hover {
  background-color: #ff9999; /* 按钮悬停颜色 */
  transform: scale(1.05); /* 悬停时放大效果 */
}
</style>
