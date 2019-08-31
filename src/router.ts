import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import i18n from "./translation";
import Lang from "@/views/Locale.vue";
import locales from "@/locales";
import { defaultLocale } from "@/config/i18n";
import routes from "@/routes";

Vue.use(Router);

const router = new Router({
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

        console.log(localeParam);

        if (defaultLocale === localeParam) {
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
