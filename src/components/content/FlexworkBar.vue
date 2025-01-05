<template>
  <div id="flexworkBar">
    <div class="text-area">
      <div class="title">{{ barTitle }}</div>
      <div class="description">{{ barDescription }}</div>
      <div class="content">
        <SolutionBar :data="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SolutionBar from "./SolutionBar.vue";

const barTitle = ref("灵活用工与外包服务");
const barDescription = ref(
  "通过多样化的用工形式和专业外包服务，帮助企业灵活应对用工需求，优化人力成本，提高运营效率。专注于外包服务，包括人力服务外包、产线外包和项目外包，高效支持企业非核心业务的专业化管理。",
);

const data = ref([
  {
    id: "1",
    title: "劳务派遣",
    description: "湖北睿才始于2005年在湖北荆门成立，提供优质人力资源服务。",
    src: "/src/assets/images/solution/001.svg",
    detail: "/detail/1",
  },
  {
    id: "2",
    title: "人力资源外包（HRO）",
    description:
      "我们提供系统的企业培训解决方案，帮助企业提升员工技能，促进团队成长。",
    src: "/src/assets/images/solution/002.svg",
    detail: "/detail/2",
  },
  {
    id: "3",
    title: "项目外包",
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
