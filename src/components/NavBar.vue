<template>
  <div id="navbar">
    <a-row :wrap="false">
      <a-col flex="240px" class="logo-area">
        <img
          src="/src/assets/images/logo-header.png"
          :alt="COMPANY_NAME"
          :title="COMPANY_NAME"
          class="logo-header"
        />
      </a-col>
      <a-col flex="auto" class="menu-area">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          class="menu"
        >
          <template #overflowedIndicator>
            <MenuOutlined
              style="
                background-color: #37adab;
                padding: 10px;
                color: white;
                font-size: large;
              "
            />
          </template>
        </a-menu>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { MenuOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { COMPANY_NAME } from "../constants.ts";

// todo 二级菜单值从后端获取

const current = ref<string[]>(["index"]);
const items = ref<MenuProps["items"]>([
  {
    key: "index",
    label: "首页",
    title: "首页",
  },
  {
    key: "news",
    label: "新闻动态",
    title: "新闻动态",
  },
  {
    key: "product",
    label: "产品服务",
    title: "产品服务",
  },
  {
    key: "solution",
    label: "解决方案",
    title: "解决方案",
  },
  {
    key: "about",
    label: "关于我们",
    title: "关于我们",
  },
]);
</script>
<style scoped>
#navbar {
  height: 60px;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  z-index: 999;
}

#navbar .logo-area .logo-header {
  width: 100%;
}

#navbar .menu-area {
  text-align: right;
}

#navbar .menu-area .menu {
  justify-content: right;
  background-color: unset;
  font-size: large;
  font-weight: bold;
}
</style>
