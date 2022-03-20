<template>
  <Page title="多选框（CheckBox）">
    <Block v-show=true title="1、标签（label）">
      <t-space>
        <t-checkbox></t-checkbox>
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
    const loading = ref(false)

    function clickLoading () {
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
