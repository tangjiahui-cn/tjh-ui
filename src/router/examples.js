const list = [
  // "button",
  // "icon",
  // "input",
  // "space",
  // "message",
  "layout"
]

export default list.map(name => ({
  path: `/${name}`,
  name: name,
  component: () => import(`../examples/${name}/index.vue`)
}))

