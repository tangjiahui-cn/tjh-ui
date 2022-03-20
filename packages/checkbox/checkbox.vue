<template>
  <span @click="clickCheckBox()">
    <input type="checkbox" ref="checkDom" :indeterminate="indeterminate">
    <label style="cursor: pointer;user-select: none;">你好</label>
  </span>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue"
import {props, emits} from "../_types/checkbox"
import useThis from "../_hooks/useThis"

export default defineComponent({
  name: "TCheckbox",
  props,
  emits,
  setup () {
    const that = useThis()
    const checkDom = ref(null)
    const currentChecked = ref(false)

    function setChecked (checked) {
      that.$refs.checkDom.checked = checked
      currentChecked.value = checked
    }

    function clickCheckBox () {
      setChecked(!currentChecked.value)
    }

    onMounted(() => {
      setChecked(true)
    })

    return {
      checkDom,
      clickCheckBox
    }
  }
})
</script>

<style lang="scss">
</style>
