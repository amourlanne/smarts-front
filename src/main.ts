import Vue from "vue";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueCookies);

router.beforeEach((to, from, next) => {
  console.log(to.meta);
  if (!(to.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
