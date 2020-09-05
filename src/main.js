import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import VueRouter from "vue-router";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: ProductForm },
    { path: "/list", component: ProductList },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
