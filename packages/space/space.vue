<template>
  <div class="t-space">
    <slot />
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, watch} from "vue"
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
      wrapperEls.value.forEach((el) => {
        el.update && el.update(size)
      })
    }

    function wrapper (el) {
      const div = document.createElement("div")
      div.appendChild(el)
      div.className = "t-space-item"

      if (props.direction === "row") {
        div.update = function (size) {
          div.style.marginRight = `${size}px`
        }
      } else if (props.direction === "column") {
        div.update = function (size) {
          div.style.width = "100%"
          div.style.marginBottom = `${size}px`
        }
      }

      div.update && div.update(props.size)
      return div
    }

    function renderEls (current, els) {
      const list = []
      els.forEach((el) => {
        const wrapperEl = wrapper(el)
        list.push(wrapperEl)
        current.appendChild(wrapperEl)
      })
      wrapperEls.value = list
    }

    onMounted(() => {
      let len = slots.default().length
      let els = []
      const current = that.$el
      const {children} = current

      while (len-- > 0) {
        const el = children[0]
        if (el) {
          els.push(el)
          current.removeChild(el)
        }
      }

      renderEls(current, els)
    })
  }
})
</script>

<style lang="scss">
@import "../_styles/space.scss";
</style>
