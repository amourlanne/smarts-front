import Vue from "vue";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

declare global {
  interface Window {
    $cookies: any;
  }
}

Vue.use(VueCookies);

router.beforeEach((to, from, next) => {
  if (!(to.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    store.commit("redirect_url", { redirectUrl: to.path });
    next({ name: "login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
