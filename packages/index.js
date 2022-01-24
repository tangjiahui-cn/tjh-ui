import components from './components'

export const install = function (app) {
  Object.keys(components).forEach(key => {
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })

  return app
}

export default {
  install
}
