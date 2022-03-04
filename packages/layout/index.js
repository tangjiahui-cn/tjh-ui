import Layout from "./layout.vue"

Layout.install = function (app) {
  app.component(Layout.name, Layout)
}

export default Layout
