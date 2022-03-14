<template>
  <div class="t-select">
    <div class="t-select-head" :style="{width}" @click="() => onClickHead()">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, createVNode, render, watch} from "vue"
import {props, emits} from "../_types/select"
import useThis from "../_hooks/useThis"

export default defineComponent({
  name: "TSelect",
  props,
  emits,
  setup (props, {slots}) {
    const that = useThis()
    const bodyDom = ref(undefined)
    const isExpand = ref(false)

    watch(isExpand, () => {
      if (!bodyDom.value) return
      if (isExpand.value) {
        that.$el.appendChild(bodyDom.value)
      } else {
        that.$el.removeChild(bodyDom.value)
      }
    })

    function onClickHead () {
      isExpand.value = !isExpand.value
    }

    function onSelect () {
      isExpand.value = false
    }

    onMounted(() => {
      const slotsDefault = slots.default()
      const div = document.createElement("div")
      const slotVNode = createVNode("div", null, slotsDefault)

      div.className = "t-select-body"
      div.style.width = props.width
      div.addEventListener("click", () => onSelect())
      bodyDom.value = div

      render(slotVNode, div)
      isExpand.value = props.defaultVisible
    })

    return {
      onClickHead
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/select.scss";
</style>
