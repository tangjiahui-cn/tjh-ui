<template>
  <div class="pages">
    <div class="pages-head">{{ title }}</div>
<!--    <div class="line"/>-->
    <div class="pages-body">
      <slot></slot>
    </div>
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
  font-size: 16px;
  position: relative;
  display: flex;
  flex-direction: column;

  &-head {
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 10px;
    padding: 0px 20px;
    height: 61px;
    line-height: 61px;
  }

  &-body {
    padding: 0px 20px;
  }
}
</style>
