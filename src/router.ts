import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import i18n from "./translation";
import Locale from "@/views/Locale.vue";
import locales from "@/locales.json";
import PageNotFound from "@/views/home/PageNotFound.vue";
import Home from "@/views/home/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Router);

const LocaleRouter = (routes: any) => {
  return new Router({
    mode: "history",
    routes: [
      {
        path: `/:locale(${locales.map(e => e.code).join("|")})?`,
        component: Locale,
        // name: "locale",
        children: routes
      }
    ]
  });
};

const router = LocaleRouter([
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
        component: () => import("./views/home/About.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("./views/home/user/Users.vue")
      },
      {
        path: "user/:username",
        name: "user",
        component: () => import("./views/home/user/User.vue")
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("./views/home/project/Projects.vue")
      },
      {
        path: "project/:slug",
        component: () => import("./views/home/project/Project.vue"),
        children: [
          {
            path: "",
            name: "project-dashboard",
            component: () => import("./views/home/project/ProjectDashboard.vue")
          },
          {
            path: "users",
            name: "project-users",
            component: () => import("./views/home/project/ProjectUsers.vue")
          }
        ]
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
  { path: "*", name: "page-not-found", component: PageNotFound }
]);

router.beforeEach((to, from, next) => {
  if (
    from.name &&
    to.params.locale === undefined &&
    i18n.locale !== process.env.VUE_APP_LOCALE
  ) {
    return next({
      name: to.name,
      query: to.query,
      params: {
        ...to.params,
        locale: from.params.locale
      },
      replace: true
    });
  }

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
      },
      replace: true
    });
  }

  if (!(to.meta.requiresAuth === false) && !store.getters.isLoggedIn) {
    return next({
      name: "login",
      params: to.params,
      query: { redirect_url: to.fullPath },
      replace: true // TODO: Le replace est-il vraiment approprié ?
    });
  } else if (store.getters.isLoggedIn && to.meta.requiresAuth === false) {
    return next(); // TODO: Deconnecter ou rediriger
  }
  return next();
});

// si je viens d'une aure route: = router link donc on garde /lang, sinon directement dans l'url, je set la variable lang TODO: si je switch avec le locale changer

export default router;
