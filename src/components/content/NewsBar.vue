<template>
  <div id="news_content">
    <a-card class="news-content" title="新闻咨询">
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
          @click="detail(news.id, news.detailUrl)"
        >
          <template #cover>
            <div class="card-img-area">
              <img :alt="news.title" :src="news.coverUrl" class="card-img" />
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
                  <router-link
                    :to="{
                      name: 'Detail',
                      params: { id: item.id, detailUrl: item.detailUrl },
                    }"
                    >{{ item.title }}</router-link
                  >
                </template>
                <template #avatar>
                  {{ item.createTime.split(" ")[0] }}
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
          <template #footer>
            <div style="text-align: center">
              <a-button
                style="background-color: #37adab; color: white"
                size="large"
                @click="more"
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
import { useRouter } from "vue-router";

interface News {
  id: string;
  src: string;
  title: string;
  description: string;
  detailUrl: string;
  time: string;
}

const props = defineProps({
  data: {
    type: Array,
  },
});
const router = useRouter();

const newsCard = ref<News[]>(props.data.slice(0, 3));
const newsList = ref<News[]>(props.data);

let showCardsFlag = ref(true);
let showListFlag = ref(false);

const showNewsList = () => {
  showCardsFlag.value = showListFlag.value;
  showListFlag.value = !showListFlag.value;
};

const more = () => {
  router.push({
    name: "News",
  });
};

const detail = (id, url) => {
  router.push({ name: "Detail", params: { id, url } });
};
</script>

<style scoped>
#news_content {
  width: 80vw;
  margin: 0 auto;
}
.news-content {
  background: rgba(255, 255, 255, 0.8);
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
