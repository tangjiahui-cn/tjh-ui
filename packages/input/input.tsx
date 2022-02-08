import {createVNode, defineComponent} from "vue";
import "~/input.scss";
const h = createVNode;

export default defineComponent({
  name: "TInput",
  setup: () => {
    return () => {
      return <input value="t-input"/>
    }
  }
});
