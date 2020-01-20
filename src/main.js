import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from './routes.js'

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

