<template>
  <div class="t-message">
    <div class="t-message-item" v-for="item in list" :key="item.id">
      <div class="t-message-item-body">
        <span
          v-if="item.type === 'loading'"
          class="loading-circle loading-circle-size-small loading-circle-type-default-focus"/>
        <t-icon
          v-else
          :type="['warn', 'warning', 'info'].includes(item.type) ? 'info' : item.type"
          :class="[`t-message-item-body-icon-${item.type}`]"/>
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
import TIcon from "../icon"
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "message",
  components: {TIcon},
  setup() {
    const mid = ref(0)
    const list = ref([])

    function push(options) {
      const id = mid.value ++
      const {
        type = "",
        content = "",
        duration = 3 * 1000,
        onClose
      } = options

      list.value.push({id, content, type})

      setTimeout(() => {
        list.value = list.value.filter(x => x.id !== id)
        onClose && onClose()
      }, [duration])
    }

    return {
      list,
      push
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/message.scss";
</style>
