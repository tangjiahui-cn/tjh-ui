<template>
  <button class="border">
    <slot>
      {{ value }}
    </slot>
  </button>
</template>

<script>
import {defineComponent} from "vue"

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
  setup() {}
})
</script>

<style scoped lang="scss">
@import "~/button.scss";
</style>
