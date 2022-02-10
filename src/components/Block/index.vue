<template>
  <div class="pages-block">
    <div class="pages-block-head">{{ title }}</div>
    <div class="pages-block-body">
      <slot>body</slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
  name: "Block",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
})
</script>

<style scoped lang="scss">
.pages-block {
  &-head {
    padding: 10px 0;
  }

  &-body {
    padding: 10px;
    position: relative;
  }
}
</style>
