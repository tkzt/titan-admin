import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vuex from "./store";
import vueRouter from "./router";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(vuetify).use(vuex).use(vueRouter).mount("#app");
