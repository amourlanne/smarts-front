import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import i18n from "./translation";
import locales from "@/locales.json";
import PageNotFound from "@/views/PageNotFound.vue";
import AppContent from "@/views/app/AppContent.vue";
import Welcome from "@/views/app/pages/Welcome.vue";

Vue.use(Router);

const LocaleRouter = (routes: any) => {
  return new Router({
    mode: "history",
    routes: [
      {
        path: `/:locale(${locales.map(e => e.code).join("|")})?`,
        component: {
          render: c => c("router-view")
        },
        children: routes
      }
    ]
  });
};

const router = LocaleRouter([
  {
    path: "/",
    component: AppContent,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        component: Welcome,
        name: "home"
      },
      {
        path: "about",
        name: "about",
        component: () => import("./views/app/pages/About.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("./views/app/user/Users.vue")
      },
      {
        path: "user/:username",
        name: "user",
        component: () => import("./views/app/user/User.vue")
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("./views/app/project/Projects.vue")
      },
      {
        path: "project/:slug",
        component: () => import("./views/app/project/Project.vue"),
        children: [
          {
            path: "",
            name: "project-dashboard",
            component: () => import("./views/app/project/ProjectDashboard.vue")
          },
          {
            path: "users",
            name: "project-users",
            component: () => import("./views/app/project/ProjectUsers.vue")
          }
        ]
      },
      {
        path: "companies",
        name: "companies",
        component: () => import("./views/app/company/Companies.vue")
      },
      {
        path: "company/:slug",
        name: "company",
        component: () => import("./views/app/company/Company.vue")
      }
    ]
  },
  {
    path: "login",
    name: "login",
    component: () => import("./views/Login.vue"),
    meta: {
      offlineMode: true
    }
  },
  {
    path: "password-reset",
    name: "password-reset",
    component: () => import("./views/PasswordReset.vue"),
    meta: {
      offlineMode: true
    }
  },
  { path: "*", name: "page-not-found", component: PageNotFound }
]);

router.beforeEach(async (to, from, next) => {
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
      }
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
    // @ts-ignore: console error
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

  if (
    (to.meta.requiresAuth || to.matched.find(data => data.meta.requiresAuth)) &&
    !store.getters.isLoggedIn
  ) {
    await store.commit("set_redirect_url", { redirectUrl: to.fullPath });

    return next({
      name: "login",
      params: to.params
    });
  } else if (store.getters.isLoggedIn && to.meta.offlineMode) {
    return next({
      name: "home",
      params: to.params,
      replace: true
    });
  }
  return next();
});

export default router;
