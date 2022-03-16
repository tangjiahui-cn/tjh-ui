<template>
  <Page title="下拉框（Select）">
    <Block v-if=true title="1、简单下拉框">
      <t-space :size="size">
        <t-select :defaultVisible="true">
          <t-select-option>1</t-select-option>
          <t-select-option disabled>2</t-select-option>
          <t-select-option disabled>3</t-select-option>
          <t-select-option>4</t-select-option>
          <t-select-option>5</t-select-option>
        </t-select>
        <t-select placeholder="请选择（默认展开）">
          <t-select-option>1</t-select-option>
          <t-select-option>2</t-select-option>
          <t-select-option>3</t-select-option>
          <t-select-option>4</t-select-option>
          <t-select-option>5</t-select-option>
          <t-select-option>6</t-select-option>
          <t-select-option>7</t-select-option>
          <t-select-option>8</t-select-option>
          <t-select-option>9</t-select-option>
          <t-select-option>10</t-select-option>
          <t-select-option>11</t-select-option>
          <t-select-option>12</t-select-option>
          <t-select-option>13</t-select-option>
          <t-select-option>14</t-select-option>
          <t-select-option>15</t-select-option>
          <t-select-option>16</t-select-option>
        </t-select>
      </t-space>
      <t-space>
        <t-button>按 钮</t-button>
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
