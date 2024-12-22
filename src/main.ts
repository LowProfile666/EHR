import { createApp } from "vue";
import App from "./App.vue";

import("./constants.ts");
import router from "/src/route";

createApp(App).use(router).mount("#app");
