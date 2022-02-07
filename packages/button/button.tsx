import {defineComponent} from "vue";
import "~/button.scss";

export default defineComponent({
  name: "TButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    value: {
      type: String,
      default: "按 钮"
    }
  },
  setup(props, { slots }) {
    return () => {
      return <button class="border">
        {slots.default ? slots.default() : props.value}
      </button>
    }
  }
});
