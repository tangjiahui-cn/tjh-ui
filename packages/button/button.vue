<template>
  <button class="border">
    <slot>
      {{ value }}
    </slot>
  </button>
</template>

<script>
import {defineComponent} from "vue";
import props from "props/button";

export default defineComponent({
  name: "TButton",
  props,
  setup() {
  }
});
</script>

<style scoped lang="scss">
@import "~/button.scss";
</style>
