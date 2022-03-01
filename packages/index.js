import components from "./components"

export function install (app) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })
}

export default {
  install
}
