<template>
  <button
    :class="[
      't-button',
      `t-button-size-${size}`,
      `t-button-type-${type}${danger ? '-danger' : ''}${disabled ? '-disabled' : ''}`
    ]"
  >
    <slot>
      {{ value }}
    </slot>
  </button>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/button"

export default defineComponent({
  name: "TButton",
  props,
  emits,
  setup() {
  }
})
</script>

<style scoped lang="scss">
@import "../_styles/button.scss";
</style>
