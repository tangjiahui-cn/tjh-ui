<template>
  <Page title="按钮（Button）">
    <Block v-show=true title="1、按钮类型（type）">
      <t-button type="primary">primary</t-button>
      <t-button type="default">default</t-button>
      <t-button type="dashed">dashed</t-button>
      <t-button type="text">text</t-button>
    </Block>
    <Block v-show=true title="2、按钮大小（size）">
      <t-button size="large">large</t-button>
      <t-button size="default">default</t-button>
      <t-button size="small">small</t-button>
    </Block>
    <Block v-show=true title="3、危险按钮（danger）">
      <t-button size="large" danger type="primary">large</t-button>
      <t-button size="default" danger type="primary">default</t-button>
      <t-button size="small" danger type="primary">small</t-button>
      <t-button size="large" danger>large</t-button>
      <t-button size="default" danger>default</t-button>
      <t-button size="small" danger>small</t-button>
      <t-button size="large" danger type="dashed">large</t-button>
      <t-button size="default" danger type="dashed">default</t-button>
      <t-button size="small" danger type="dashed">small</t-button>
      <t-button size="large" danger type="text">large</t-button>
      <t-button size="default" danger type="text">default</t-button>
      <t-button size="small" danger type="text">small</t-button>
    </Block>
    <Block v-show=true title="4、禁用（disabled）">
      <t-button size="large" disabled type="primary">large</t-button>
      <t-button size="default" disabled type="primary">default</t-button>
      <t-button size="small" disabled type="primary">small</t-button>
      <t-button size="large" disabled>large</t-button>
      <t-button size="default" disabled>default</t-button>
      <t-button size="small" disabled>small</t-button>
      <t-button size="large" disabled type="dashed">large</t-button>
      <t-button size="default" disabled type="dashed">default</t-button>
      <t-button size="small" disabled type="dashed">small</t-button>
      <t-button size="large" disabled type="text">large</t-button>
      <t-button size="default" disabled type="text">default</t-button>
      <t-button size="small" disabled type="text">small</t-button>
      <t-button size="large" danger disabled type="primary">large</t-button>
      <t-button size="default" danger disabled type="primary">default</t-button>
      <t-button size="small" danger disabled type="primary">small</t-button>
      <t-button size="large" danger disabled>large</t-button>
      <t-button size="default" danger disabled>default</t-button>
      <t-button size="small" danger disabled>small</t-button>
      <t-button size="large" danger disabled type="dashed">large</t-button>
      <t-button size="default" danger disabled type="dashed">default</t-button>
      <t-button size="small" danger disabled type="dashed">small</t-button>
      <t-button size="large" danger disabled type="text">large</t-button>
      <t-button size="default" danger disabled type="text">default</t-button>
      <t-button size="small" danger disabled type="text">small</t-button>
    </Block>
    <Block v-show=true title="5、加载中（loading）">
      <t-button type="primary" :loading="loading" @click="clickLoading">{{ loading ? '3秒后恢复' : '点击我呀' }}</t-button>

      <t-button type="primary" :loading="loading" @click="clickLoading">primary</t-button>
      <t-button type="default" :loading="loading" @click="clickLoading">default</t-button>
      <t-button type="dashed" :loading="loading" @click="clickLoading">dashed</t-button>
      <t-button type="text" :loading="loading" @click="clickLoading">text</t-button>

      <t-button type="primary" :loading="loading" danger>primary</t-button>
      <t-button type="default" :loading="loading" danger>default</t-button>
      <t-button type="dashed" :loading="loading" danger>dashed</t-button>
      <t-button type="text" :loading="loading" danger>text</t-button>

      <t-button type="primary" :loading="loading" disabled>primary</t-button>
      <t-button type="default" :loading="loading" disabled>default</t-button>
      <t-button type="dashed" :loading="loading" disabled>dashed</t-button>
      <t-button type="text" :loading="loading" disabled>text</t-button>
    </Block>
    <Block v-show=true title="6、块按钮（block）">
      <t-button type="primary" block>primary</t-button>
      <t-button type="default" block>default</t-button>
      <t-button type="dashed" block>dashed</t-button>
      <t-button type="text" block>text</t-button>
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
