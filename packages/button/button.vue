<template>
  <button
    :disabled="disabled"
    :class="[
      't-button',
      `t-button-size-${size}`,
      `t-button-type-${type}${danger ? '-danger' : ''}`,
      block ? 't-button-block' : '',
      loading ? 't-button-loading' : ''
    ]"
    @focusin="focus = true;"
    @focusout="focus = false;"
  >
    <span
      v-if="loading"
      :class="[
        'loading-circle',
        `loading-circle-size-${size}`,
        `loading-circle-type-${type}${danger ? '-danger' : ''}${focus ? '-focus' : ''}`
      ]"
    />
    <span>
      <slot>
        {{ value }}
      </slot>
    </span>
  </button>
</template>

<script>
import {defineComponent, ref} from "vue"
import {props, emits} from "../_types/button"

export default defineComponent({
  name: "TButton",
  props,
  emits,
  setup () {
    const focus = ref(false)
    return {
      focus
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/button.scss";
</style>
