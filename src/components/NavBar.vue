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
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { COMPANY_NAME } from "../constants.ts";

// todo 二级菜单值从后端获取

const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "mail",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation One",
  },
  {
    key: "app",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "sub1",
    icon: () => h(SettingOutlined),
    label: "Navigation Three - Submenu",
    title: "Navigation Three - Submenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: h(
      "a",
      { href: "https://antdv.com", target: "_blank" },
      "Navigation Four - Link",
    ),
    title: "Navigation Four - Link",
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
}
</style>
