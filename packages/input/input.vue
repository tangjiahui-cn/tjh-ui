<template>
  <span class="t-input-wrapper">
    <input
      ref="inputRef"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="handleInput"
      :class="[
        't-input',
        `t-input-size-${size}${!disabled && allowClear ? '-clear' : ''}`,
        disabled ? 't-input-disabled' : ''
      ]"
    />
    <t-icon
      v-if="showClear"
      type="clear"
      class="t-input-right"
      @click="handleClear"
    ></t-icon>
  </span>
</template>

<script>
import {defineComponent, computed, onMounted, ref, watch} from "vue"
import {props, emits} from "../_types/input"

export default defineComponent({
  name: "TInput",
  props,
  emits,
  setup (props, {emit}) {
    const inputRef = ref()
    const inputValue = ref(
      props.modelValue || props.value || props.defaultValue || ""
    )
    const showClear = computed(
      () => !props.disabled && props.allowClear && inputValue.value
    )

    watch(
      () => [props.modelValue, props.value],
      ([modelValue, value]) => {
        if (modelValue !== undefined) {
          inputValue.value = modelValue
          inputRef.value.value = modelValue
        } else if (value !== undefined) {
          inputValue.value = value
          inputRef.value.value = value
        }
      }
    )

    function changeEventNodeTarget (e, newValue) {
      Object.defineProperty(e, "target", {writable: true})
      e.target = inputRef.value.cloneNode(true)
      e.target.value = newValue
    }

    function handleInput (e) {
      const value = e.target.value

      if (props.modelValue !== undefined) {
        inputValue.value = value
        emit("update:modelValue", e.target.value)
      } else if (props.value !== undefined) {
        inputRef.value.value = inputValue.value
        changeEventNodeTarget(e, value)
      } else {
        inputValue.value = value
      }

      emit("change", e)
      emit("input", e)
    }

    function handleClear (e) {
      changeEventNodeTarget(e, "")

      if (props.modelValue !== undefined) {
        inputValue.value = ""
        inputRef.value.value = ""
        emit("update:modelValue", "")
      } else if (props.value === undefined) {
        inputValue.value = ""
        inputRef.value.value = ""
      }

      emit("change", e)
      emit("input", e)
    }

    onMounted(() => {
      inputRef.value.value = inputValue.value
    })

    return {
      showClear,
      inputRef,
      handleClear,
      handleInput
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/input.scss";
</style>
