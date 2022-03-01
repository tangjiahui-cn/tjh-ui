<template>
  <span class="t-input-wrapper">
    <input
      ref="inputRef"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="handleInput"
      :class="[
        't-input',
        `t-input-size-${size}${(!disabled && allowClear) ? '-clear' : ''}`,
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
    const inputValue = ref(props.value || props.defaultValue || "")

    const isValue = computed(() => props.value !== undefined)
    const showClear = computed(() => {
      return !props.disabled && props.allowClear && inputValue.value
    })

    watch(() => props.value, () => {
      if (props.value !== undefined) {
        inputRef.value.value = props.value
        inputValue.value = props.value
      }
    })

    function handleInput (e) {
      Object.defineProperty(e, "target", { writable: true })
      e.target = inputRef.value.cloneNode(true)

      const value = isValue.value ? props.value : e.target.value
      inputRef.value.value = value
      inputValue.value = value
      emit("change", e)
    }

    function handleClear (e) {
      Object.defineProperty(e, "target", { writable: true })
      e.target = inputRef.value.cloneNode(true)
      e.target.value = ""

      if (!isValue.value) {
        inputRef.value.value = ""
        inputValue.value = ""
      }
      emit("change", e)
    }

    onMounted(() => {
      inputRef.value.value = inputValue.value
    })

    return {
      showClear,
      inputRef,
      handleInput,
      handleClear
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/input.scss";
</style>
