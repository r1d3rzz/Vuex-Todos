import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).mount("#app");
