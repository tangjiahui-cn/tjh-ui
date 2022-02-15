import {createRouter, createWebHashHistory} from "vue-router"
import examples from "./examples"

const vueRouter = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...examples
  ]
})

export default vueRouter
