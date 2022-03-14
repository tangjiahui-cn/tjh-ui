<template>
  <div class="t-select-option">
    <slot />
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/selectOption"

export default defineComponent({
  name: "TSelectOption",
  props,
  emits
})
</script>

<style lang="scss">
@import "../_styles/select.scss";
</style>
