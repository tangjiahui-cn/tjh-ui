<template>
  <Page title="布局（Layout）">
    <Block v-if=true title="1、简单模式">
      <t-space>
        <div class="area">
          <t-layout>
            <t-layout-header>Head</t-layout-header>
            <t-layout-body>
              Body
              <t-button size="small" @click="addInputNum"> 行数 + 1 </t-button>
              <div v-for="item in list" :key="item.id">
                {{item.value}}
              </div>
            </t-layout-body>
            <t-layout-footer>Footer</t-layout-footer>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout-body>Body</t-layout-body>
            <t-layout-footer>Footer</t-layout-footer>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout-Header>Header</t-layout-Header>
            <t-layout-body>Body</t-layout-body>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout-body>Body</t-layout-body>
          </t-layout>
        </div>
      </t-space>
    </Block>
    <Block v-if=true title="2、特殊模式">
      <t-space>
        <div class="area">
          <t-layout>
            <t-layout-slider>Slider</t-layout-slider>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout-body>Body</t-layout-body>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout-slider> Slider </t-layout-slider>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout-body>Body</t-layout-body>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
            <t-layout-slider> Slider </t-layout-slider>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout-body>Body</t-layout-body>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
            <t-layout-slider> Slider </t-layout-slider>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout>
                <t-layout-slider> Slider </t-layout-slider>
                <t-layout-body> Body </t-layout-body>
              </t-layout>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout>
                <t-layout-body> Body </t-layout-body>
                <t-layout-slider> Slider </t-layout-slider>
              </t-layout>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
          </t-layout>
        </div>
        <div class="area">
          <t-layout>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout>
                <t-layout-slider> Slider </t-layout-slider>
                <t-layout-body> Body </t-layout-body>
                <t-layout-slider> Slider </t-layout-slider>
              </t-layout>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
          </t-layout>
        </div>
      </t-space>
    </Block>
    <Block v-if=true title="3、复杂嵌套模式">
      <t-space>
        <div class="area">
          <t-layout>
            <t-layout-slider>
              <t-layout>
                <t-layout-header>Slider(header)</t-layout-header>
                <t-layout-body>Slider(body)</t-layout-body>
                <t-layout-footer>Slider(foot)</t-layout-footer>
              </t-layout>
            </t-layout-slider>
            <t-layout>
              <t-layout-header>Header</t-layout-header>
              <t-layout>
                <t-layout-header>Header</t-layout-header>
                <t-layout>
                  <t-layout-body>Body</t-layout-body>
                  <t-layout-slider>Slider</t-layout-slider>
                </t-layout>
                <t-layout-footer>Footer</t-layout-footer>
              </t-layout>
              <t-layout-footer>Footer</t-layout-footer>
            </t-layout>
          </t-layout>
        </div>
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
    const id = ref(1)
    const list = ref([
      {id: 1, value: "line: 1"}
    ])

    function addInputNum () {
      list.value.push({
        id: ++ id.value,
        value: `line: ${id.value}`
      })
    }

    return {
      list,
      addInputNum
    }
  }
})
</script>

<style lang="scss">
.area {
  width: 250px;
  height: 150px;
  border: 1px solid #e8e8e8;
}
.t-layout-header {
  background: #275ce3;
  color: white;
}

.t-layout-body {
  background: #5b81e3;
  color: white;
}

.t-layout-footer {
  background: #7c9ce8;
  color: white;

}

.t-layout-slider {
  color: whitesmoke;
  background: #103a88;
}
</style>
