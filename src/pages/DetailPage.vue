<template>
  <div id="detailPage">
    <!-- 加载状态 -->
    <a-spin v-if="loading" class="news-spin" size="large" />

    <!-- 文章内容 -->
    <div v-else>
      <!-- 文章封面 -->
      <img :src="article?.coverUrl" alt="文章封面" class="cover" />

      <!-- 文章标题 -->
      <h1 class="title">{{ article?.title }}</h1>

      <!-- 文章描述 -->
      <p class="description">{{ article?.description }}</p>

      <!-- 文章发布时间 -->
      <div style="display: flex; margin-bottom: 20px">
        <p class="time">发布时间：{{ formatTime(article?.createTime) }}</p>
        <p class="view-count">浏览量：{{ article.viewCount }}</p>
      </div>

      <!-- 文章内容（富文本内容显示） -->
      <div class="content" v-html="article?.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArticleById } from "../api";

// 文章数据类型
interface Article {
  id: string;
  coverUrl: string;
  title: string;
  description: string;
  content: string;
  createTime: string;
  viewCount: number;
}

const router = useRouter();
const route = useRoute();
const articleId = route.params.articleId;

// 数据状态
const article = ref<Article | null>(null);
const loading = ref(true);

// 时间格式化函数
const formatTime = (time: string | undefined): string => {
  if (!time) return "";
  const date = new Date(time);
  return date.toLocaleString();
};

// 初次加载时获取文章
onMounted(() => {
  if (articleId) {
    getArticleById(articleId)
      .then((resp) => {
        loading.value = false;
        if (!resp.data) router.push("/404");
      })
      .catch((err) => {
        loading.value = false;
        router.push("/500");
      });
  }
});
</script>

<style scoped>
#detailPage {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

.news-spin {
  width: 100%;
  height: 50vh;
  position: relative;
  align-content: center;
}

.error {
  text-align: center;
  padding: 20px;
  color: red;
  font-size: 1.2rem;
}

.cover {
  width: 100%;
  height: auto;
  max-height: 50vh;
  border-radius: 8px;
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.time {
  font-size: 0.9rem;
  color: #888;
}
.view-count {
  font-size: 0.9rem;
  color: #888;
  margin: 0 0 0 auto;
}

.content {
  font-size: 1rem;
  color: #333;
}
</style>
