<template>
  <Page title="间距（Space）">
    <Block v-if=true title="1、间距大小(size)">
      <t-space :size="size">
        <t-button type="primary"></t-button>
        <t-button type="default"></t-button>
        <t-button type="dashed"></t-button>
        <t-button type="text"></t-button>
        <t-input allowClear/>
        <t-button type="primary" @click="size += 10">size + 10</t-button>
        <t-button type="primary" @click="size -= 10">size - 10</t-button>
      </t-space>
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
  setup() {
    const size = ref(8)

    return {
      size
    }
  }
})
</script>
