<template>
  <span @click="clickCheckBox" :class="[disabled && 't-checked-disabled']">
    <input
      type="checkbox"
      ref="checkDom"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :class="[disabled && 'no-pointer']"
    />
    <label
      style="cursor: pointer; user-select: none"
      :class="[disabled && 'no-pointer']"
    >
      <slot>{{ label }}</slot>
    </label>
  </span>
</template>

<script>
import {defineComponent, onMounted, ref, watch} from "vue"
import {props, emits} from "../_types/checkbox"
import useThis from "../_hooks/useThis"

export default defineComponent({
  name: "TCheckbox",
  props,
  emits,
  setup (props, {emit}) {
    const that = useThis()
    const checkDom = ref(null)
    const currentChecked = ref(false)

    watch(
      () => props.modelValue,
      () => {
        setChecked(!!props.modelValue)
      }
    )

    function setChecked (checked) {
      that.$refs.checkDom.checked = checked
      currentChecked.value = checked
    }

    function clickCheckBox () {
      if (props.disabled) return

      let targetChecked = !currentChecked.value
      if (props.modelValue !== undefined) {
        emit("update:modelValue", !!targetChecked)
      } else if (props.value !== undefined) {
        targetChecked = props.value
      }

      emit("change", targetChecked)
      setChecked(targetChecked)
    }

    onMounted(() => {
      let targetChecked = false
      if (props.modelValue !== undefined) targetChecked = props.modelValue
      else if (props.value !== undefined) targetChecked = props.value
      else if (props.defaultValue !== undefined)
        targetChecked = props.defaultValue
      setChecked(targetChecked)
    })

    return {
      checkDom,
      clickCheckBox
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/common/index";

.no-pointer {
  pointer-events: none;
}

.t-checked-disabled {
  color: $colorDisabled;
  cursor: not-allowed;
}
</style>
