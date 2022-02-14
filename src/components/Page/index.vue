<template>
  <div class="pages">
    <div class="pages-head">{{ title }}</div>
    <div class="line"/>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "index",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/common/index.scss";
.pages {
  color: #525252;
  margin: 10px;
  padding: 10px;
  border: 1px solid $border;
  font-size: 16px;
  position: relative;

  &-head {
    font-size: 18px;
    font-weight: bold;
  }

  .line {
    border: 1px solid #f1f1f1;
    margin: 15px 0;
  }
}
</style>
