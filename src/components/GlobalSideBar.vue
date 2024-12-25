<template>
  <div id="global_sidebar">
    <a-float-button-group
      shape="circle"
      :style="{
        top: '50%',
        right: '0',
      }"
    >
      <a-float-button description="微信">
        <template #icon>
          <WechatFilled />
        </template>
        <template #tooltip>
          <div class="tooltip-info" @click="copyText(wechat)">
            {{ wechat }}
          </div>
          <div>
            <img :src="wechatQRCodeSrc" alt="微信二维码" style="width: 100%" />
          </div>
        </template>
      </a-float-button>

      <a-float-button description="QQ">
        <template #icon>
          <QqOutlined />
        </template>
        <template #tooltip>
          <div class="tooltip-info" @click="copyText(qq)">
            {{ qq }}
          </div>
          <div>
            <img :src="qqQRCodeSrc" alt="QQ二维码" style="width: 100%" />
          </div>
        </template>
      </a-float-button>

      <a-float-button description="邮箱">
        <template #icon>
          <MailFilled />
        </template>
        <template #tooltip>
          <div class="tooltip-info" @click="copyText(email)">{{ email }}</div>
        </template>
      </a-float-button>

      <a-float-button description="电话">
        <template #icon>
          <PhoneFilled />
        </template>
        <template #tooltip>
          <div class="tooltip-info" @click="copyText(phone)">{{ phone }}</div>
        </template>
      </a-float-button>

      <a-float-button description="地址">
        <template #icon>
          <EnvironmentFilled />
        </template>
        <template #tooltip>
          <div class="tooltip-info" @click="copyText(address)">
            {{ address }}
          </div>
        </template>
      </a-float-button>
    </a-float-button-group>
    <a-back-top
      :visibility-height="500"
      type="primary"
      :style="{
        bottom: '5px',
        right: '0',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  WechatFilled,
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  QqOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { message } from "ant-design-vue";

// todo 值从后端获取

const wechat = ref<string>("z157606566503");
const wechatQRCodeSrc = ref<string>("/src/assets/images/wechat-qrcode.jpg");
const qq = ref<string>("2062008467");
const qqQRCodeSrc = ref<string>("/src/assets/images/wechat-qrcode.jpg");
const email = ref<string>("2062008467@qq.com");
const phone = ref<string>("15760656503");
const address = ref<string>("湖北省荆门市东宝区象山大道33豪");

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text); // 写入剪贴板
    message.success("复制成功！");
  } catch (err) {
    message.error("复制失败，请手动复制！");
  }
};
</script>

<style scoped>
#global_sidebar {
  position: fixed;
  right: 0;
  z-index: 999;
}

.tooltip-info {
  width: 200px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.tooltip-info:hover {
  cursor: pointer;
}
</style>
