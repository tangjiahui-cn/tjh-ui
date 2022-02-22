<template>
  <div>
    <slot>
      间距
    </slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/space"

export default defineComponent({
  name: "TSpace",
  props,
  emits,
  setup() {
  }
})
</script>

<style lang="scss">
@import "../_styles/input.scss";
</style>
