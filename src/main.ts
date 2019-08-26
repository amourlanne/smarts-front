import Vue from "vue";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./translation";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

declare global {
  interface Window {
    $cookies: any;
  }
}

Vue.use(VueCookies);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
