<template>
  <div id="ehrSolutionBar">
    <div class="text-area">
      <div class="title">{{ barTitle }}</div>
      <div class="description">{{ barDescription }}</div>
    </div>
    <div class="content">
      <a-row :gutter="16">
        <a-col
          v-for="item in data"
          :key="item.id"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          class="content-col"
        >
          <a-card :title="item.title" :bordered="false" class="content-card">
            <a-list :data-source="item.list">
              <template #renderItem="{ item }">
                <a-list-item>
                  <div style="font-weight: bold">{{ item.title }}</div>
                  {{ item.description }}
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const barTitle = ref("共享人力资源解决方案");
const barDescription = ref(
  "通过共享人力资源管理中心，提供人力资源管理深度服务，提升企业内部人力资源运作效率。提供创新型共享HR服务，通过资源整合与专业支持，助力中小企业高效管理人力资源，实现可持续发展。",
);

const data = ref([
  {
    id: "1",
    title: "核心服务内容",
    description: "",
    list: [
      {
        title: "HR服务外包",
        description: "派驻HRD、HR，支持企业人力资源工作。",
      },
      {
        title: "流程优化",
        description: "企业招聘、薪酬、绩效等模块的流程优化。",
      },
      {
        title: "政策咨询",
        description: "提供劳动法律法规、福利政策等咨询服务。",
      },
      {
        title: "数字化支持",
        description: "共享HR管理系统或工具，提升管理效率。",
      },
    ],
  },
  {
    id: "2",
    title: "服务优势/亮点",
    description: "",
    list: [
      {
        title: "提升效率",
        description: "帮助中小企业节省HR成本，提高管理效率。",
      },
      {
        title: "专业支持",
        description: "由资深HR专家指导，提供定制化解决方案。",
      },
      {
        title: "资源整合",
        description: "共享人力资源平台，灵活调配资源。",
      },
      {
        title: "成本友好",
        description: "按需付费，特别适合中小企业。",
      },
    ],
  },
  {
    id: "3",
    title: "数据展示",
    description: "",
    list: [
      {
        title: "累计服务客户数量",
        description: "如“已服务超过500家中小企业”。",
      },
      {
        title: "HR成本节约",
        description: "如“平均帮助企业减少30%的HR管理成本”。",
      },
      {
        title: "企业满意度",
        description: "如“客户满意度高达98%”。",
      },
      {
        title: "支持行业覆盖",
        description:
          "如“覆盖15个以上行业领域”，可以列出具体行业名称（如互联网、制造业、零售业等）。",
      },
    ],
  },
]);
</script>

<style scoped>
#ehrSolutionBar {
  width: 100%;
  min-height: 100vh;
  background-image: url("/src/assets/images/ehrsolution/bg.png");
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-repeat: no-repeat; /* 防止背景重复 */
  background-position: center; /* 背景图片居中对齐 */
}

.text-area {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
}

.title {
  width: 100%;
  color: lightcyan;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  margin: 0 auto;
  width: 60%;
  color: lightcyan;
  font-size: 16px;
  font-weight: normal;
  padding-top: 30px;
  text-align: center;
}
.content {
  width: 80%;
  margin: 100px auto 0;
}
.content-col {
  margin-bottom: 10px;
}
.content-card {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 黑色背景，50%透明度 */
}
</style>
