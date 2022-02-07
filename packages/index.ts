import components from "./components";
import type {App} from "vue";

export function install(app: App): void {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
}

export default {
  install
};
