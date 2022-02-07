import Input from "./input";
import type {App} from "vue";

Input.install = function (app: App): void {
  app.component(Input.name, Input);
};

export default Input;
