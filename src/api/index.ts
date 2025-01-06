import myAxios from "../utils/request.ts";

export function getBannerArticles() {
  return myAxios.request({
    url: "/public/index/banners",
  });
}

export function getNewsArticles() {
  return myAxios.request({
    url: "/public/index/news",
  });
}

export function getArticleById(id) {
  return myAxios.request({
    url: `/public/article/${id}`,
  });
}
