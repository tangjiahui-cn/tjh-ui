<template>
  <Page title="消息（Message）">
    <Block v-if=true title="1、消息类型">
      <t-space>
        <t-button @click="handleClick('success')">success</t-button>
        <t-button @click="handleClick('error')">error</t-button>
        <t-button @click="handleClick('info')">info</t-button>
        <t-button @click="handleClick('warning')">warning</t-button>
        <t-button @click="handleClick('warn')">warn</t-button>
        <t-button @click="handleClick('loading')">loading</t-button>
      </t-space>
    </Block>
    <Block v-if=true :title="`2、延时打印（${duration}秒后关闭）`">
      <t-space>
        <t-button @click="duration += 1"> + 1 秒</t-button>
        <t-button @click="duration -= (duration > 1 ? 1 : 0)"> - 1 秒</t-button>
        <t-button @click="handleClick('success', duration * 1000)">success</t-button>
        <t-button @click="handleClick('error', duration * 1000)">error</t-button>
        <t-button @click="handleClick('info', duration * 1000)">info</t-button>
        <t-button @click="handleClick('warning', duration * 1000)">warning</t-button>
        <t-button @click="handleClick('warn', duration * 1000)">warn</t-button>
        <t-button @click="handleClick('loading', duration * 1000)">loading</t-button>
      </t-space>
    </Block>
    <Block v-if=true :title="`3、回调函数`">
      <t-space>
        <t-button @click="handleClick('loading', 1 * 1000, showSuccess)">消息关闭1秒后显示success</t-button>
      </t-space>
    </Block>
  </Page>
</template>

<script>
import {defineComponent, ref} from "vue"
import Block from "../../components/Block/index.vue"
import Page from "../../components/Page/index.vue"
import useThis from "../../../packages/_hooks/useThis"

export default defineComponent({
  name: "index",
  components: {Block, Page},
  setup () {
    const that = useThis()
    const duration = ref(3)

    const handleClick = (type, duration, fn) => {
      if ([
        "success", "error", "info",
        "warning", "warn", "loading"
      ].includes(type)) {
        that.$message[type](`${type}`, duration, fn)
      }
    }

    const showSuccess = () => {
      handleClick("success", 2 * 1000)
    }

    return {
      duration,
      handleClick,
      showSuccess
    }
  }
})
</script>
