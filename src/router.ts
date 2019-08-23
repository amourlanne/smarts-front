import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
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
    { path: "*", component: PageNotFound }
  ]
});
