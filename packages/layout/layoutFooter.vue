<template>
  <div class="t-layout-footer">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/layout"

export default defineComponent({
  name: "TLayoutFooter",
  props,
  emits
})
</script>

<style lang="scss">
@import "../_styles/layout.scss";
</style>
