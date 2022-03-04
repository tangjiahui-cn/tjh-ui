<template>
  <Page title="布局（Layout）">
    <Block v-if=true title="1、固定头部">
      <div style="width: 250px; height: 150px; border: 1px solid #e8e8e8;">
        <t-layout />
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
