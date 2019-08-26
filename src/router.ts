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
      path: "/password-reset",
      name: "password-reset",
      component: () => import("./views/PasswordReset.vue"),
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
    next({ name: "login", query: { redirect_url: to.path } });
  } else {
    next();
  }
});

export default router;
