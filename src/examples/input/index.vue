<template>
  <Page title="输入框（Input）">
    <Block v-if=true title="1、大小(size)">
      <t-space>
        <t-input size="large" placeholder="large" style="width: 200px;" defaultValue="你好"/>
        <t-input size="default" placeholder="default" style="width: 200px;"/>
        <t-input size="small" defaultValue="small" style="width: 200px;"/>
      </t-space>
    </Block>
    <Block v-if=true title="2、可清空(allowClear)">
      <t-space>
        <t-input allowClear size="large" placeholder="large" style="width: 200px;"/>
        <t-input allowClear style="width: 200px;" :value="value" @change="handleChange"/>
        <t-input allowClear size="small" value="固定value值" style="width: 200px;" />
      </t-space>
    </Block>
    <Block v-if="true" title="3、禁用(disabled)">
      <t-space>
        <t-input disabled allowClear size="large" placeholder="large" style="width: 200px;" value="large"/>
        <t-input disabled allowClear value="default" style="width: 200px;"/>
        <t-input disabled allowClear size="small" value="small" style="width: 200px;"/>
      </t-space>
    </Block>
    <Block v-if="true" title="4、双向绑定(v-model)">
      <t-space>
        <t-input allowClear size="large" placeholder="large" style="width: 200px;" v-model="value"/>
        <div>{{ value }}</div>
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
    const value = ref(":value=value")

    function handleChange (e) {
      value.value = e.target.value
    }

    return {
      value,
      handleChange
    }
  }
})
</script>
