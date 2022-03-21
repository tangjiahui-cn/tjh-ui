<template>
  <Page title="多选框（CheckBox）">
    <Block v-show=true title="1、标签（label）">
      <t-space>
        <t-checkbox label="选项一"></t-checkbox>
        <t-checkbox >选项二</t-checkbox>
      </t-space>
    </Block>
    <Block v-show=true title="2、绑定值（value）">
      <t-space>
        <t-checkbox :value="true">绑定真值</t-checkbox>
      </t-space>
    </Block>
    <Block v-show=true title="3、默认值（defaultValue）">
      <t-space>
        <t-checkbox :defaultValue="true">默认真值</t-checkbox>
      </t-space>
    </Block>
    <Block v-show=true title="4、半选中（indeterminate）">
      <t-space>
        <t-checkbox indeterminate>半选中</t-checkbox>
      </t-space>
    </Block>
    <Block v-show=true title="5、禁用（disabled）">
      <t-space>
        <t-checkbox disabled>禁用</t-checkbox>
      </t-space>
    </Block>
    <Block v-show=false title="6、双向绑定(v-model)">
      <t-space>
        <t-checkbox
          v-model="value"
        >v-model</t-checkbox>
        <span>{{ value }}</span>
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
    const value = ref(true)
    return {
      value
    }
  }
})
</script>
