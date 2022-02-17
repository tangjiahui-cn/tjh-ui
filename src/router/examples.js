export default [
  // {
  //   path: "/",
  //   component: () => import("../App.vue")
  // },
  {
    path: "/button",
    name: "button",
    // visible: false,
    component: () => import("../examples/button/index.vue")
  },
  {
    path: "/icon",
    name: "icon",
    // visible: false,
    component: () => import("../examples/icon/index.vue")
  },
  {
    path: "/input",
    name: "input",
    // visible: false,
    component: () => import("../examples/input/index.vue")
  }
]
