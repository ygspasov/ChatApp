import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ChatWindow from "../components/ChatWindow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/chat",
    name: "ChatWindow",
    component: ChatWindow,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: "Home" });
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
