<template>
  <div class="t-select">
    <div
      ref="headDom"
      :class="`t-select-head${currentValue ? '' : '-placeholder'}`"
      :style="{width}"
      @click="isExpand = true"
    >
      {{ currentValue || placeholder }}
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, render, watch} from "vue"
import {props, emits} from "../_types/select"
import useThis from "../_hooks/useThis"
import useElementPosition from "../_hooks/useElementPosition"

export default defineComponent({
  name: "TSelect",
  props,
  emits,
  setup (props, {slots}) {
    const that = useThis()
    const bodyDom = ref(undefined)
    const isExpand = ref(false)
    const headDom = ref(undefined)
    const currentValue = ref(undefined)

    watch(isExpand, () => {
      if (!bodyDom.value) return
      if (isExpand.value) {
        const {
          x,
          y,
          clientHeight: height,
          clientWidth: width
        } = useElementPosition(that.$el)
        bodyDom.value.style.background = `white`
        bodyDom.value.style.left = `${x}px`
        bodyDom.value.style.top = `${y + height}px`
        bodyDom.value.style.width = `${width}px`
        document.body.appendChild(bodyDom.value)
        bodyDom.value.focus()
        that.$refs.headDom.style.pointerEvents = "none"
      } else {
        document.body.removeChild(bodyDom.value)
        that.$refs.headDom.style.pointerEvents = "auto"
      }
    })

    function onSelect (item) {
      currentValue.value = item.el.wholeText
      for (let i = 0; i < bodyDom.value.children.length; i++) {
        const option = bodyDom.value.children[i]
        const isCurrent = option.innerHTML === currentValue.value
        if (isCurrent) {
          option.className =
            option.className.indexOf("disabled") > -1
              ? "t-select-option-choose-disabled"
              : "t-select-option-choose"
        } else {
          option.className =
            option.className.indexOf("disabled") > -1
              ? "t-select-option-disabled"
              : "t-select-option"
        }
      }

      isExpand.value && (isExpand.value = false)
    }

    function createOption (slot) {
      const option = document.createElement("div")
      render(slot, option)

      const disabled =
        slot.props && (slot.props.disabled || slot.props.disabled === "")
      let className =
        currentValue.value === slot.el.wholeText
          ? "t-select-option-choose"
          : "t-select-option"

      if (disabled) {
        className += "-disabled"
      } else {
        option.addEventListener("click", () => onSelect(slot))
      }

      option.className = className
      return option
    }

    onMounted(() => {
      const slotsDefault = slots.default() || []
      const div = document.createElement("div")

      slotsDefault.forEach((slot) => {
        if (slot.type && slot.type.name === "TSelectOption") {
          div.appendChild(createOption(slot))
        }
      })

      if (slotsDefault.length < 1) div.style.minHeight = "128px"
      div.className = "t-select-body"
      div.style.width = props.width
      div.setAttribute("tabindex", "0")
      div.addEventListener("blur", () => (isExpand.value = false))

      bodyDom.value = div
      isExpand.value = props.defaultVisible
    })

    return {
      isExpand,
      currentValue,
      headDom
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/select.scss";
</style>
