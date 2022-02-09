import Button from "./button.vue"

Button.install = function (app) {
  app.component(Button.name, Button)
}

export default Button
