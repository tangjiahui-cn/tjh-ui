<template>
  <Page title="输入框（Input）">
    <Block v-show=true title="1、大小(size)">
      <t-input size="large" placeholder="large" style="width: 200px;"/>
      <t-input value="default" style="width: 200px;"/>
      <t-input size="small" value="small" style="width: 200px;"/>
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
    const loading = ref(false)

    function clickLoading() {
      if (!loading.value) {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 1000 * 3)
      }
    }

    return {
      loading,
      clickLoading
    }
  }
})
</script>
