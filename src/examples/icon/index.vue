<template>
  <Page title="图标（Icon）">
    <Block v-show=true title="1、实心图标">
      <div class="block-show" v-for="(value, key) in list" :key="key">
        <t-icon :type="value" class="block-show-icon"/>
        <span class="block-show-text">{{ value }}</span>
      </div>
    </Block>
  </Page>
</template>

<script>
import {defineComponent, ref} from "vue"
import Block from "../../components/Block/index.vue"
import Page from "../../components/Page/index.vue"

export default defineComponent({
  name: "index",
  components: {Block, Page},
  setup () {
    const list = ref([
      "clear",
      "success",
      "error",
      "info"
    ])

    return {
      list
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/common/index.scss";

.block-show {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  transition: transform $delay;
  margin: 0px 20px 20px 0px;

  box-shadow: 1px 3px 11px 2px rgba(228,228,228,0.75);
  -webkit-box-shadow: 1px 3px 11px 2px rgba(228,228,228,0.75);
  -moz-box-shadow: 1px 3px 11px 2px rgba(228,228,228,0.75);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &-text {
    position: absolute;
    top: 75%;
    width: 100%;
    text-align: center;
    font-size: 14px;
  }

  &-icon {
    font-size: 50px;
    position: absolute;
    display: inline-block;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
