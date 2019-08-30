import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store";
import i18n from "./translation";
import Lang from "@/views/Locale.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: `/:locale(en|fr)?`,
      component: Lang,
      beforeEnter(to, from, next) {
        const localeParam = to.params.locale;

        if (
          i18n.locales.find(locale => locale.code === localeParam) &&
          i18n.locale !== localeParam
        ) {
          i18n.locale = localeParam;
        }
        return next();
      },
      children: [
        {
          path: "/",
          component: Home,
          children: [
            {
              path: "",
              component: HelloWorld,
              name: "home",
              props: { msg: "Welcome to Your Vue.js + TypeScript App" }
            },
            {
              path: "about",
              name: "about",
              component: () => import("./views/About.vue")
            }
          ]
        },
        {
          path: "login",
          name: "login",
          component: () => import("./views/Login.vue"),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: "password-reset",
          name: "password-reset",
          component: () => import("./views/PasswordReset.vue"),
          meta: {
            requiresAuth: false
          }
        },
        { path: "*", component: PageNotFound }
      ]
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
    next({
      name: "login",
      params: from.params,
      query: { redirectUrl: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
