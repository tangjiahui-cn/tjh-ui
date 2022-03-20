const list = [
  "button",
  "icon",
  "input",
  "space",
  "message",
  "layout",
  "select",
  "checkbox"
]

export default list.map(name => ({
  path: `/${name}`,
  name: name,
  component: () => import(`../examples/${name}/index.vue`)
}))

