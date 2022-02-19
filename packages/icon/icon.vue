<template>
  <span class="inline-block">
    <svg class="icon" aria-hidden="true" :style="style">
      <use v-if=type :xlink:href="`#icon-${type}`" />
    </svg>
  </span>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/icon"
import "../_assets/iconfont/iconfont"

export default defineComponent({
  name: "TIcon",
  props,
  emits,
  setup() {
  }
})
</script>

<style lang="scss" scoped>
.inline-block {
  display: inline-block;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
