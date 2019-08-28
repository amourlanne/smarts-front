import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store";
import i18n from "./translation";
import { defaultLocale, locales } from "@/config/i18n";
import RouterView from "@/components/RouterView.vue";
import Lang from "@/views/Locale.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/:locale(fr|ja|en)?",
      component: Lang,
      beforeEnter(to, from, next) {
        const localeParam = to.params.locale;

        if (
          locales.find(locale => locale.code === localeParam) &&
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
          name: "home",
          children: [
            {
              path: "",
              component: HelloWorld,
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

/*const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/:lang?",
      component: RouterView,
      children: [
        {
          path: "/",
          component: RouterView,
          beforeEnter(to, from, next) {
            console.log(to.params.lang);
            return next();
          },
          children: [
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
            {
              path: "/",
              component: Home,
              name: "home",
              children: [
                {
                  path: "about",
                  name: "about",
                  component: () => import("./views/About.vue")
                },
                {
                  path: "",
                  component: HelloWorld,
                  name: "home",
                  props: { msg: "Welcome to Your Vue.js + TypeScript App" }
                  // beforeEnter(to, from, next) {
                  //   if (
                  //     to.params.lang &&
                  //     !locales.find(locale => locale.code === to.params.lang)
                  //   ) {
                  //     console.log(to.params);
                  //     return next({ name: "page-not-found", params: to.params });
                  //   }
                  //   return next();
                  // }
                }
              ]
            },
            { path: "*", component: PageNotFound }
          ]
        },
        { path: "*", component: PageNotFound }
      ]
    }
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

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  if (locales.find(locale => locale.code === lang) && i18n.locale !== lang) {
    i18n.locale = lang;
  }
  console.log("lang", lang, "defaultLocale", defaultLocale);
  console.log(to);
  if (lang === defaultLocale) {
    // @ts-ignore
    next({ name: to.name, params: { ...to.params, lang: undefined } });
  }
  console.log("Locale is:", i18n.locale);
  return next();
});*/

router.beforeEach((to, from, next) => {
  if (!(to.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    console.log("from", from);
    next({
      name: "login",
      params: from.params,
      query: { redirectUrl: to.path }
    });
  } else {
    next();
  }
});

export default router;
