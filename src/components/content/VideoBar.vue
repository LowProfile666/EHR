<template>
  <div id="videoBar">
    <div class="play-img" @click="playVideo">
      <img src="/src/assets/images/video/play.png" alt="播放" title="播放" />
    </div>
    <div class="video-text">
      <p class="video-slogan-1">{{ slogan1 }}</p>
      <p class="video-slogan-2">{{ slogan2 }}</p>
    </div>
    <div class="video-play-area" v-show="showVideoFlag" @click="closeVideo">
      <video
        ref="videoPlayer"
        class="video-player"
        controls
        :src="videoSrc"
        @click.stop="change"
        @ended="onVideoEnd"
      >
        您的浏览器不支持视频播放。
      </video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// todo 数据从后端获取

let showVideoFlag = ref(false);

const videoSrc = "/public/2024当枝松宜东+东宝HR职业技能大赛.mp4";
const slogan1 = ref<stirng>("全球引才 数智引擎 产业引航 洞察引领");
const slogan2 = ref<stirng>("与企业、人选、伙伴同行，从优秀到卓越！");
const videoPlayer = ref<HTMLVideoElement | null>(null);

const playVideo = () => {
  showVideoFlag.value = true;
  videoPlayer.value.play();
};
const closeVideo = () => {
  showVideoFlag.value = false;
  videoPlayer.value.pause();
};
const change = () => {
  // videoPlayer.value.paused是鼠标点击之前的暂停状态
  if (!videoPlayer.value.paused) videoPlayer.value.play();
  else videoPlayer.value.pause();
};
const onVideoEnd = () => {
  showVideoFlag.value = false;
};
</script>

<style scoped>
#videoBar {
  width: 100%;
  height: 250px;
  position: relative;
  background-image: url(/src/assets/images/video/background.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.play-img {
  object-fit: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.play-img:hover {
  cursor: pointer;
}
.video-text {
  width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 0 1.5rem 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-slogan-1 {
  font-size: 2rem;
  color: white;
}
.video-slogan-2 {
  font-size: 1rem;
  color: white;
  line-height: 2;
}
.video-play-area {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.video-player {
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 80%;
  max-height: 80%;
  transform: translate(-50%, -50%);
}
</style>
