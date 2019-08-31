import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export default [
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
];
