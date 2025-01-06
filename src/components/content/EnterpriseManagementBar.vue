<template>
  <div id="enterpriseManagementBar">
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

const barTitle = ref("培训");
const barDescription = ref(
  "综合企业管理咨询、培训、人力资源管理项目搭建，助力精益生产和积分制导入，实现企业管理优化与提升。通过系统化的管理咨询、培训及优化方案，提升企业管理水平，推动组织效能与核心竞争力的全面提升。",
);

const data = ref([
  {
    id: "1",
    title: "户外体验式培训",
    description:
      "企业管理专家运用科学方法，在调查分析的基础上找出企业管理中存在的问题，提出改进方案并指导实施，帮助企业改善经营管理的一种服务性活动。",
    src: "/src/assets/images/enterprise/cover1.png",
  },
  {
    id: "2",
    title: "管理研学",
    description:
      "涵盖管理培训、人力资源培训、通识培训、职业技能培训以及户外拓展体验式培训。",
    src: "",
  },
  {
    id: "3",
    title: "职业心态",
    description:
      "包括人力资源管理项目（如招聘体系、培训体系、绩效体系、薪酬福利体系、HR管理体系、HR三支柱模型）和企业管理类项目（如战略管理、销售管理、5S等）。",
    src: "",
  },
  {
    id: "4",
    title: "心理健康",
    description:
      "以准时生产和全员积极参与改善为两大特征，通过减少投入获取更多产出的生产模式。",
    src: "",
  },
  {
    id: "5",
    title: "管理培训",
    description:
      "将积分制度用于管理，通过积分反映和考核个人综合表现，并将福利与积分挂钩，激励员工的主观能动性，提升积极性。",
    src: "",
  },
  {
    id: "6",
    title: "人力资源取证培训",
    description:
      "通过绩效计划制定、绩效辅导沟通、绩效考核评价和绩效结果应用等过程，持续提升个人、部门和组织的绩效。",
    src: "",
  },
]);
</script>

<style scoped>
#enterpriseManagementBar {
  width: 100%;
  min-height: 100vh;
  background-image: url("/src/assets/images/enterprise/bg.jpg");
}
.text-area {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
}

.title {
  width: 100%;
  color: blue;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  margin: 0 auto;
  width: 60%;
  color: #607d8b;
  font-size: 16px;
  font-weight: normal;
  padding-top: 30px;
  text-align: center;
}
.content {
  margin: 100px auto 0;
}
</style>
