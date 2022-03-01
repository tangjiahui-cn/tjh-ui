import {createApp} from "vue"
import App from "./App.vue"
import tjhUi from "../packages/index"
import vueRouter from "./router"
// import tjhUi from 'tjh-ui'
// import 'tjh-ui/lib/index'

const app = createApp(App)

app.use(tjhUi).use(vueRouter)
  .mount("#app")
