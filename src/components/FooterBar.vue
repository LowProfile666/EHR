<template>
  <div id="footerBar">
    <div class="footer-head">
      <!-- 动态渲染列 -->
      <div class="footer-links">
        <div
          v-for="(link, index) in footerData"
          :key="index"
          class="footer-link"
        >
          <h3 class="footer-link-title">{{ link.title }}</h3>
          <ul>
            <li v-for="(item, idx) in link.items" :key="idx">
              <a href="#" class="footer-link-a">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 关注社交账号 -->
      <div class="footer-follow">
        <h3 class="footer-link-title">联系我们</h3>

        <ul class="footer-contact-us">
          <li>
            <img
              src="/src/assets/images/wechat-qrcode.jpg"
              :alt="COMPANY_NAME"
              :title="COMPANY_NAME"
              style="width: 200px"
            />
          </li>
          <li>
            <img
              src="/src/assets/images/wechat-qrcode.jpg"
              :alt="COMPANY_NAME"
              :title="COMPANY_NAME"
              style="width: 200px"
            />
          </li>
        </ul>
      </div>
    </div>
    <a-divider style="height: 2px; background-color: #36adab" />
    <div class="footer-foot">版权信息 @ HBRC™ 所有 2024</div>
  </div>
</template>

<script setup lang="ts">
import { COMPANY_NAME } from "../constants.ts";

// todo 从后端获取数据，替换二维码

const footerData = [
  {
    title: "人才服务",
    items: [
      "中高端人才访寻",
      "招聘流程外包",
      "灵活用工",
      "校园与雇主品牌",
      "人才培训与发展",
      "人才规划与咨询",
      "薪税服务",
    ],
  },
  {
    title: "专项服务",
    items: ["全球化人才", "政府引才就业"],
  },
  {
    title: "HR SaaS",
    items: ["HR SaaS应用及解决方案"],
  },
  {
    title: "招聘平台",
    items: ["医脉同道", "零售同道", "数科同道"],
  },
  {
    title: "生态伙伴",
    items: ["禾蛙平台"],
  },
  {
    title: "职业赋能",
    items: ["就业服务中心", "热门职位", "公开招聘"],
  },
  {
    title: "趋势洞察",
    items: ["白皮书", "薪酬报告", "前沿实践", "观点洞察", "视频访谈"],
  },
  {
    title: "关于科锐",
    items: [
      "公司概览",
      "公司介绍",
      "集团品牌",
      "社会责任",
      "公司新闻",
      "投资者关系",
    ],
  },
];
</script>

<style scoped>
/* 整体底部栏样式 */
#footerBar {
  padding: 40px 40px;
  background-color: #2b2d3c;
  color: #d1d3db;
}

.footer-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 各列的容器样式 */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  flex: 1 1 auto;
}

/* 单列样式 */
.footer-link {
  flex: 1 1 100px;
  min-width: 150px;
}

.footer-link-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* 列表样式 */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

.footer-link-a {
  color: #d1d3db;
  text-decoration: none;
  font-size: 14px;
}

.footer-link-a:hover {
  text-decoration: underline;
}

.footer-contact-us {
  display: flex;
  gap: 20px;
}

.footer-foot {
  width: 100%;
  text-align: center;
}
</style>
