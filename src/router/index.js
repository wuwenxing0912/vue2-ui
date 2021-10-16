import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue'
import Document from '../views/Document.vue'
import ButtonDoc from '../components/button/example/Button.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Document,
      // redirect: "/components/introduction"
    },
    {
      path: "/components",
      component: Document,
      children: [
        // { path: "introduction", component: Introduction },
        { path: "button", component: ButtonDoc },
        // { path: "modal", component: ModalDoc },
        // { path: "tabs", component: TabsDoc },
        // { path: "switch", component: SwitchDoc },
      ],
    }
  ]
});
