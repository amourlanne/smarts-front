import Vue from "vue";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/translation";
import axios from "axios";
import "./registerServiceWorker";

Vue.config.productionTip = false;

declare global {
  interface Window {
    $cookies: any;
  }
}

axios.defaults.baseURL = process.env.VUE_APP_API;

Vue.use(Vuelidate);
Vue.use(VueCookies);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
