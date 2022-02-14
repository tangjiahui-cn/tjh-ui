<template>
  <input
    :class="[
      't-input',
      `t-input-size-${size}`
    ]"
    :value="value"
    :placeholder="placeholder"
  />
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/input"

export default defineComponent({
  name: "TInput",
  props,
  emits,
  setup() {}
})
</script>

<style lang="scss">
@import "../_styles/input.scss";
</style>
