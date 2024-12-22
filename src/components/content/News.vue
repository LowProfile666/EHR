<template>
  <div id="news_content">
    <div class="title">
      <h3>新闻动态</h3>
      <a class="title-more" href="#">更多</a>
    </div>
    <div class="cards">
      <a-card
        hoverable
        v-for="(news, index) in newsArr"
        :key="index"
        class="card"
      >
        <template #cover>
          <img :alt="news.title" :src="news.src" class="card-img" />
        </template>
        <a-card-meta title="Card title" :description="news.description">
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// todo 数据从后端获取，更多按钮跳转新闻列表页面（或者隐藏当前卡片，分页显示列表）

interface News {
  id: string;
  src: string;
  title: string;
  description: string;
}

const newsArr = ref<News[]>([
  {
    id: "1",
    title: "Title 1",
    description: "description 1",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "2",
    title: "Title 2",
    description: "description 2",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "3",
    title: "Title 3",
    description: "description 3",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
]);
</script>

<style scoped>
#news_content {
  background-color: lightblue;
  width: 80vw;
  margin: 0 auto;
  padding: 30px;
}
.title {
  padding-bottom: 10px;
  display: flex;
  align-items: center; /* 垂直居中对齐子元素 */
  justify-content: space-between; /* 将两端的元素分散到容器两侧 */
}

.title-more {
  margin-left: auto; /* 将当前元素推到最右侧 */
  text-decoration: none;
}
.cards {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px; /* 子元素之间的间距 */
}
.card {
  width: 360px;
  height: 100%;
  flex: 1 1 auto; /* 防止卡片被强制压缩 */
}
.card-img {
  height: 240px;
}
</style>
