import Vue from "vue";
import Router, { RouterOptions } from "vue-router";
import store from "@/store";
import i18n from "./translation";
import Lang from "@/views/Locale.vue";
import locales from "@/locales.json";
import PageNotFound from "@/views/PageNotFound.vue";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Router);

const LocaleRouter = (routes: any) => {
  return new Router({
    mode: "history",
    routes: [
      {
        path: `/:locale(${locales.map(e => e.code).join("|")})?`,
        component: Lang,
        name: "lang",
        beforeEnter(to, from, next) {
          const localeParam = to.params.locale;

          if (
            locales.find(locale => locale.code === localeParam) &&
            i18n.locale !== localeParam
          ) {
            i18n.locale = localeParam;
          }

          if (process.env.VUE_APP_LOCALE === localeParam) {
            // @ts-ignore
            return next({
              name: to.name,
              query: to.query,
              params: {
                ...to.params,
                locale: undefined
              }
            });
          }
          return next();
        },
        children: routes
      }
    ]
  });
};

const router = LocaleRouter([
  {
    path: "/",
    component: Home,
    name: "home",
    children: [
      {
        path: "",
        component: HelloWorld,
        name: "helloWord",
        props: { msg: "Welcome to Your Vue.js + TypeScript App" }
      },
      {
        path: "about",
        name: "about",
        component: () => import("./views/About.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("./views/Users.vue")
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
    name: "passwordReset",
    component: () => import("./views/PasswordReset.vue"),
    meta: {
      requiresAuth: false
    }
  },
  { path: "*", name: "pageNotFound", component: PageNotFound }
]);

router.beforeEach((to, from, next) => {
  if (!(to.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next({
      name: "login",
      params: to.params,
      query: { redirectUrl: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
