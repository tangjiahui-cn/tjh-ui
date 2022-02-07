<template>
  <button class="border">{{ value }}</button>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "TButton",
  props: {
    value: {
      type: String,
      default: "按 钮"
    }
  }
});
</script>

<style scoped lang="scss">
@import "~/button.scss";
</style>
