import Button from "./button.vue"
import type {App} from "vue"

Button.install = function (app: App): void {
  app.component(Button.name, Button)
}

export default Button
