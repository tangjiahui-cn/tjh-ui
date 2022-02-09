<template>
  <button class="border">
    <slot>
      {{ value }}
    </slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import { buttonProps } from "../_types/button"

export default defineComponent({
  name: "TButton",
  props: buttonProps,
  setup(props) {
  }
})
</script>

<style scoped lang="scss">
@import "../_styles/button.scss";
</style>
