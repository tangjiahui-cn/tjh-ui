<template>
  <Page title="下拉框（Select）">
    <Block v-if=true title="1、简单下拉框">
      <t-space :size="size">
        <t-select>
          <t-select-option>1</t-select-option>
          <t-select-option>2</t-select-option>
          <t-select-option>3</t-select-option>
        </t-select>

        <t-select placeholder="请选择（默认展开）" :defaultVisible="true">
          <t-select-option>1</t-select-option>
          <t-select-option>2</t-select-option>
          <t-select-option>3</t-select-option>
        </t-select>
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
  setup () {
    const size = ref(8)
    const size2 = ref(8)

    return {
      size,
      size2
    }
  }
})
</script>
