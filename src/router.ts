import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          component: HelloWorld,
          props: { msg: "Welcome to Your Vue.js + TypeScript App" }
        },
        {
          path: "about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("./views/ForgotPassword.vue"),
      meta: {
        requiresAuth: false
      }
    },
    { path: "*", component: PageNotFound }
  ]
});

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

export default router;
