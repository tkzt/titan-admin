import { createRouter, createWebHashHistory } from "vue-router";

const routesOutOfList = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: { public: true },
  },
  {
    path: "/",
    name: "Loading",
    component: () => import("@/views/Barren.vue"),
    meta: { public: true },
  },
];

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      order: 1,
      icon: "mdiDashboard",
    },
  },
];

const modules = import.meta.globEager("./modules/*.js");
routes.push(
  ...Object.entries(modules).reduce(
    (pre, [_, module]) => [...pre, ...module.default],
    []
  )
);

export default createRouter({
  history: createWebHashHistory(),
  routes: [...routesOutOfList, ...routes],
});
