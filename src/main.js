import { createApp } from 'vue'
import App from './App.vue'
import tjhUi from 'packages/index'
// import tjhUi from 'tjh-ui'
// import 'tjh-ui/lib/index.css'

const app = createApp(App)

app
    .use(tjhUi)
    .mount('#app')
