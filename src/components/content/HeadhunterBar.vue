<template>
  <div id="headhunterBar">
    <div class="text-area">
      <div class="title">{{ barTitle1 }}</div>
      <div class="description">{{ barDescription1 }}</div>
      <div class="link">
        <a href="/">了解更多</a>
      </div>
    </div>
    <div class="text-area" style="margin-top: 50px">
      <div class="title">{{ barTitle2 }}</div>
      <div class="description">{{ barDescription2 }}</div>
      <div class="link">
        <a href="/">了解更多</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const barTitle1 = ref("猎头");
const barDescription1 = ref(
  "猎头服务专注于为企业提供高端人才寻访解决方案，致力于挖掘和甄选符合企业战略发展需求的高级管理者和专业技术人才。凭借行业深耕的资源网络、精准的岗位解析以及专业化的评估体系，猎头服务帮助企业快速找到关键岗位的优秀候选人，推动组织能力提升，为企业的长期发展注入核心竞争力。同时，在人才与企业之间搭建高效沟通桥梁，确保双方达成共赢。",
);

const barTitle2 = ref("服务特色");
const barDescription2 = ref(
  "通过专家团队诊断后，量身定制人力资源管理体系，并开展持续的陪跑式的教练服务，确保有效落地，提升人效，为企业赋能。",
);
</script>

<style scoped>
#headhunterBar {
  width: 100%;
  min-height: 100vh;
  background-image: url("/src/assets/images/headhunter/bg.jpg");
}

.text-area {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
}

.title {
  width: 100%;
  color: #6fa8dc;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
}
.description {
  margin: 0 auto 0 0;
  width: 50%;
  color: #a3c1da;
  font-size: 16px;
  font-weight: normal;
  padding-top: 30px;
  text-align: left;
}
.link {
  margin-top: 30px;
}

.link a {
  color: #ffffff; /* 使用白色作为默认链接颜色 */
  text-decoration: none; /* 去掉默认下划线 */
  display: inline-block; /* 让链接支持更多样式控制（如内边距等） */
  padding: 8px 16px; /* 增加链接的内边距，提升点击区域 */
  border: 2px solid transparent; /* 默认无边框，但可用于 hover 效果 */
  border-radius: 5px; /* 给链接添加圆角，显得更加现代 */
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* 添加一个微弱背景色增强视觉效果 */
  transform: scale(1); /* 初始缩放比例 */
  transition: all 0.4s ease; /* 增加过渡效果的速度和流畅性 */
}

.link a:hover {
  text-decoration: none; /* 保持 hover 时无下划线（更简洁） */
  color: white; /* 橙色高亮，吸引用户注意 */
  background-color: rgba(255, 165, 0, 0.2); /* 背景色换为带透明度的橙色 */
  transform: scale(1.1); /* 鼠标悬浮时轻微放大，增强交互感 */
  border: 2px solid #ffa500; /* 悬浮时显示橙色边框 */
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.4); /* 鼠标悬浮时添加阴影效果 */
}
</style>
