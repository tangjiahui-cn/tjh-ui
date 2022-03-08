<template>
  <div class="t-layout-body">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/layout"

export default defineComponent({
  name: "TLayoutBody",
  props,
  emits
})
</script>

<style lang="scss">
@import "../_styles/layout.scss";
</style>
