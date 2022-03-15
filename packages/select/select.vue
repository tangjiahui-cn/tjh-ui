<template>
  <div class="t-select" tabindex="0" hidefocus @blur="closeBody()">
    <div
      :class="`t-select-head${currentValue ? '' : '-placeholder'}`"
      :style="{width}"
      @click="() => (isExpand = !isExpand)"
    >
      {{ currentValue || placeholder }}
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, render, watch} from "vue"
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
    const currentValue = ref(undefined)

    watch(isExpand, () => {
      if (!bodyDom.value) return
      if (isExpand.value) {
        that.$el.appendChild(bodyDom.value)
      } else {
        that.$el.removeChild(bodyDom.value)
      }
    })

    function closeBody () {
      if (isExpand.value) isExpand.value = false
    }

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

    onMounted(() => {
      const slotsDefault = slots.default()
      const div = document.createElement("div")

      slotsDefault.forEach((slot) => {
        if (slot.type && slot.type.name === "TSelectOption") {
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
          div.appendChild(option)
        }
      })

      div.className = "t-select-body"
      div.style.width = props.width
      if (slotsDefault.length < 1) div.style.minHeight = "128px"
      bodyDom.value = div

      isExpand.value = props.defaultVisible
    })

    return {
      isExpand,
      closeBody,
      currentValue
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/select.scss";
</style>
