import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import DetailPage from "../pages/DetailPage.vue";

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
    path: "/detail",
    name: "Detail",
    component: DetailPage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
