<template>
  <div id="news_content">
    <a-card title="新闻动态" class="news-content">
      <template #extra
        ><a class="title-more" @click="showNewsList">
          <MenuOutlined
            v-if="showCardsFlag"
            style="padding: 10px; color: #37adab; font-size: large"
          />
          <CloseOutlined
            v-if="showListFlag"
            style="padding: 10px; color: #37adab; font-size: large"
          /> </a
      ></template>
      <div v-if="showCardsFlag" class="cards">
        <a-card
          hoverable
          v-for="(news, index) in newsCard"
          :key="index"
          class="card"
        >
          <template #cover>
            <div class="card-img-area">
              <img :alt="news.title" :src="news.src" class="card-img" />
            </div>
          </template>
          <a-card-meta :title="news.title" :description="news.description">
          </a-card-meta>
        </a-card>
      </div>
      <div v-if="showListFlag" class="list">
        <a-list item-layout="horizontal" :data-source="newsList" size="small">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.detailUrl">{{ item.title }}</a>
                </template>
                <template #avatar> {{ item.time }} </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
          <template #footer>
            <div style="text-align: center">
              <a-button
                style="background-color: #37adab; color: white"
                size="large"
                >查看更多</a-button
              >
            </div>
          </template>
        </a-list>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons-vue";

// todo 数据从后端获取，更多按钮跳转新闻列表页面（或者隐藏当前卡片，分页显示列表）

interface News {
  id: string;
  src: string;
  title: string;
  description: string;
  detailUrl: string;
  time: string;
}

let showCardsFlag = ref(true);
let showListFlag = ref(false);

const newsCard = ref<News[]>([
  {
    id: "1",
    title: "Title 1",
    description: "description 1",
    src: "/src/assets/images/news/001.svg",
    detailUrl: "",
    time: "2021-12-25",
  },
  {
    id: "2",
    title: "Title 2",
    description: "description 2",
    src: "/src/assets/images/news/002.svg",
    detailUrl: "",
    time: "2021-12-24",
  },
  {
    id: "3",
    title: "Title 3",
    description: "description 3",
    src: "/src/assets/images/news/003.svg",
    detailUrl: "",
    time: "2021-12-23",
  },
]);
const newsList = ref<News[]>([
  {
    id: "1",
    title: "Title 1",
    description: "description 1",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    detailUrl: "",
    time: "2021-12-25",
  },
  {
    id: "2",
    title: "Title 2",
    description: "description 2",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    detailUrl: "",
    time: "2021-12-24",
  },
  {
    id: "3",
    title: "Title 3",
    description: "description 3",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    detailUrl: "",
    time: "2021-12-23",
  },
  {
    id: "4",
    title: "Title 4",
    description: "description 4",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    detailUrl: "",
    time: "2021-12-24",
  },
  {
    id: "5",
    title: "Title 35",
    description: "description 5",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    detailUrl: "",
    time: "2021-12-23",
  },
]);

const showNewsList = () => {
  showCardsFlag.value = showListFlag.value;
  showListFlag.value = !showListFlag.value;
};
</script>

<style scoped>
#news_content {
  width: 80vw;
  margin: 0 auto;
  padding: 30px;
}
.news-content {
  background: rgba(255, 255, 255, 0.5);
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
.card-img-area {
  width: 100%;
  height: 240px;
  overflow: hidden; /* 限制子元素溢出 */
  position: relative; /* 确保溢出限制生效 */
}
.card-img {
  height: 100%;
  width: 100%;
}
.card-img:hover {
  transform: scale(1.2);
  transition: 1.5s;
}
</style>
