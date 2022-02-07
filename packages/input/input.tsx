import {defineComponent} from "vue";
import "~/input.scss";

export default defineComponent({
  name: "TInput",
  setup () {
    return () => {
      return <input value="t-input"/>
    }
  }
});
