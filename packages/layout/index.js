import Layout from "./layout.vue"
import LayoutHeader from "./layoutHeader.vue"
import LayoutBody from "./layoutBody.vue"
import LayoutFooter from "./layoutFooter.vue"
import LayoutSlider from "./layoutSlider.vue"

Layout.install = function (app) {
  app.component(Layout.name, Layout)
  app.component(LayoutHeader.name, LayoutHeader)
  app.component(LayoutBody.name, LayoutBody)
  app.component(LayoutFooter.name, LayoutFooter)
  app.component(LayoutSlider.name, LayoutSlider)
}

export default Layout
export {Layout, LayoutHeader, LayoutBody, LayoutFooter, LayoutSlider}
