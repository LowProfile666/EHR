<template>
  <div id="flexworkBar">
    <div class="text-area">
      <div class="title">{{ barTitle }}</div>
      <div class="description">{{ barDescription }}</div>
    </div>
    <div class="content">
      <SolutionBar :data="data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SolutionBar from "./SolutionBar.vue";

const barTitle = ref("人力资源管理咨询");
const barDescription = ref(
  "人力资源管理咨询专注于为企业提供系统化、专业化的人力资源解决方案，涵盖人力资源规划、薪酬福利设计、绩效激励体系、培训开发、劳动关系管理、招聘配置优化以及HR三支柱（HRBP、COE、SSC）建设等领域。通过科学的管理工具与数据支持，帮助企业优化人力资源配置，激发组织活力，提升员工效率，助力企业实现战略目标与可持续发展。",
);

const data = ref([
  {
    id: "1",
    title: "人力资源规划",
    description: "湖北睿才始于2005年在湖北荆门成立，提供优质人力资源服务。",
    src: "/src/assets/images/solution/001.svg",
    detail: "/detail/1",
  },
  {
    id: "2",
    title: "薪酬福利",
    description:
      "我们提供系统的企业培训解决方案，帮助企业提升员工技能，促进团队成长。",
    src: "/src/assets/images/solution/002.svg",
    detail: "/detail/2",
  },
  {
    id: "3",
    title: "绩效激励",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
  {
    id: "4",
    title: "培训开发",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
  {
    id: "5",
    title: "劳动关系",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
  {
    id: "6",
    title: "招聘配置",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
  {
    id: "7",
    title: "HR三支柱",
    description: "专家团队为客户提供专业的人力资源管理咨询服务。",
    src: "/src/assets/images/solution/003.svg",
    detail: "/detail/3",
  },
]);
</script>

<style scoped>
#flexworkBar {
  width: 100%;
  min-height: 100vh;
  background-image: url("/src/assets/images/flexwork/bg.png");
}

.text-area {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
}

.title {
  width: 100%;
  color: darkred;
  font-size: 35px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;
}
.description {
  margin: 0 0 0 auto;
  width: 50%;
  color: darkcyan;
  font-size: 16px;
  font-weight: normal;
  padding-top: 30px;
  text-align: left;
}
.content {
  width: 100%;
  margin-top: 100px;
}
</style>
