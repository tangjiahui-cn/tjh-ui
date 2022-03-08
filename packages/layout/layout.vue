<template>
  <div class="t-layout" ref="tLayout">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue"
import {props, emits} from "../_types/layout"

export default defineComponent({
  name: "TLayout",
  props,
  emits,
  setup (props, {slots}) {
    const tLayout = ref(null)

    onMounted(() => {
      const slotsIns = slots.default()
      const current = tLayout.value
      if (slotsIns.map((x) => x.type.name).includes("TLayoutSlider")) {
        current.style.flexDirection = "row"
      }
    })

    return {
      tLayout
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/layout.scss";
</style>
