import CheckBox from "./checkbox.vue"

CheckBox.install = function (app) {
  app.component(CheckBox.name, CheckBox)
}

export default CheckBox
