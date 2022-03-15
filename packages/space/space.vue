<template>
  <div class="t-space" />
</template>

<script>
import {createVNode, defineComponent, onMounted, ref, watch, render} from "vue"
import {props, emits} from "../_types/space"
import useThis from "../_hooks/useThis"

export default defineComponent({
  name: "TSpace",
  props,
  emits,
  setup (props, {slots}) {
    const that = useThis()
    const wrapperEls = ref([])

    watch(
      () => props.size,
      () => updateEls(props.size)
    )

    function updateEls (size = 8) {
      const lastIndex = wrapperEls.value.length - 1
      wrapperEls.value.forEach((el, index) => {
        el.update && el.update(size, index === lastIndex)
      })
    }

    function createWrapper (isLast) {
      const div = document.createElement("div")
      div.className = "t-space-item"

      if (props.direction === "row") {
        div.update = function (size, isLast) {
          if (isLast) return
          div.style.marginRight = `${size}px`
        }
      } else if (props.direction === "column") {
        div.update = function (size, isLast) {
          div.style.width = "100%"
          if (isLast) return
          div.style.marginBottom = `${size}px`
        }
      }

      div.update && div.update(props.size, isLast)
      return div
    }

    onMounted(() => {
      const wrapperList = []
      const slotDefault = slots.default()
      const lastIndex = slotDefault.length - 1
      const container = document.createElement("div")

      slotDefault.forEach((slot, ind) => {
        if (typeof slot.type !== "symbol") {
          const wrapper = createWrapper(ind === lastIndex)
          wrapperList.push(wrapper)
          render(slot, wrapper)
          container.appendChild(wrapper)
        }
      })

      wrapperEls.value = wrapperList
      that.$el.appendChild(container)
    })
  }
})
</script>

<style lang="scss">
@import "../_styles/space.scss";
</style>
