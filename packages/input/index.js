import Button from './input.vue'

Button.install = function (app) {
  app.component(Button.name, Button);
  return app;
}

export default Button