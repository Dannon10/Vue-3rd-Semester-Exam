import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Counter from "@/components/Counter.vue";
import Home from "@/components/Home.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/counter",
      name: "Counter",
      component: Counter
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound
    }
  ]
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
