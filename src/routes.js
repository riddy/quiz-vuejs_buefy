import VueRouter from "vue-router";
import Welcome from "./components/Welcome.vue";
import Quiz from "./components/Quiz.vue";
import Result from "./components/Result.vue";
let routes = [
  {
    path: "/",
    component: Welcome
  },
  {
    path: "/quiz",
    component: Quiz
  },
  {
    path: "/result/:result",
    component: Result,
    props: true
  }
];

export default new VueRouter({ routes });
