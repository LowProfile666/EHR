import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import NotFound from "../pages/exception/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Index",
    component: IndexPage,
  },
  {
    path: "/detail/:articleId",
    name: "Detail",
    component: DetailPage,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // 每次进入页面都滚动到顶部
  },
});
