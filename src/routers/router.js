import { createRouter, createWebHashHistory } from "vue-router";
//import HomeCmp from "@/views/Home.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home.vue")
  },
  {
    name: "AboutPage",
    path: "/about",
    component: () => import("@/views/About.vue")
  },
  {
    name: "DetailPage",
    path: "/detail/:id",
    component: () => import("@/views/Details.vue")
  }
]

const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routes,
});

export default router;