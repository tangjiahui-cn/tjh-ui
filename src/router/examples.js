export default [
  // {
  //   path: "/",
  //   redirect: "/button"
  // },
  {
    path: "/button",
    name: "button",
    component: () => import("../examples/button/index.vue")
  },
  {
    path: "/input",
    name: "input",
    component: () => import("../examples/input/index.vue")
  }
]
