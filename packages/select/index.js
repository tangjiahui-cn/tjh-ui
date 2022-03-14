import Select from "./select.vue"
import SelectOptions from "./options.vue"

Select.install = function (app) {
  app.component(Select.name, Select)
  app.component(SelectOptions.name, SelectOptions)
}

export default Select
