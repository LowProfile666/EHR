import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import NotFound from "../pages/exception/NotFound.vue";
import Error from "../pages/exception/Error.vue";

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
  {
    path: "/500",
    name: "Error",
    component: Error,
  },
  // 捕获所有未定义路径，跳转到 404 页面
  {
    path: "/:pathMatch(.*)*", // Vue Router 4.x 的通配符写法
    name: "CatchAll",
    redirect: "/404", // 重定向到 404 页面
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // 每次进入页面都滚动到顶部
  },
});
