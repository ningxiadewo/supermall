import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Profile = () => import("views/profile/Profile.vue");
const Shopcart = () => import("views/shopcart/Shopcart.vue");

// 配置组件和路由映射关系
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/shopcart",
    component: Shopcart
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
