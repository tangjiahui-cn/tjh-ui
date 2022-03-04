<template>
  <div style="display: flex;width: 100%;height: 100%;flex-direction: column;">
    <div style="flex: 0 0 48px;background: blue;" />
    <div style="flex: 1;display: flex;">
      <div style="flex: 0 0 48px;background: #67a5ec;"/>
      <div style="flex: 1;background: #c1d7f1;"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {props, emits} from "../_types/input"

export default defineComponent({
  name: "TLayout",
  props,
  emits,
  setup () {}
})
</script>

<style lang="scss">
</style>
