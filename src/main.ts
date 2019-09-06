import Vue from "vue";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/translation";
import axios from "axios";
import "bootstrap";

import "./main.scss";

Vue.config.productionTip = false;

declare global {
  interface Window {
    $cookies: any;
  }
}
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API;
axios.interceptors.response.use(
  config => config,
  error => {
    const response = error.response;
    if (response.status == 401) {
      window.$cookies.remove("access_token");
      router.push({ name: "login" });
      // TODO: set locale params
    }
    return Promise.reject(error);
  }
);

Vue.use(Vuelidate);
Vue.use(VueCookies);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
