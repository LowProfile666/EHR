<template>
  <GlobalSideBar />
  <NavBar />
  <div id="content">
    <router-view />
  </div>
  <FooterBar />
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import GlobalSideBar from "../components/GlobalSideBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>

<style scoped>
#content {
  margin-top: 60px;
}
</style>
