<template>
  <div class="pages">
    <div class="pages-head">按钮</div>
    <div class="line"/>
    <div class="pages-block">
      <div class="pages-block-head">1、按钮类型（type）</div>
      <div class="pages-block-body">
        <t-button type="primary">primary</t-button>
        <t-button type="default">default</t-button>
        <t-button type="dashed">dashed</t-button>
        <t-button type="text">text</t-button>
      </div>
    </div>
    <div class="pages-block">
      <div class="pages-block-head">2、按钮大小（size）</div>
      <div class="pages-block-body">
        <t-button type="text" size="large" :disabled="true">large</t-button>
        <t-button type="text" size="default" :danger="true">default</t-button>
        <t-button type="text" size="small" :danger="true" :disabled="true">small</t-button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "index"
})
</script>

<style scoped lang="scss">
@import "~/common/var.scss";
.pages {
  color: #525252;
  margin: 10px;
  padding: 10px;
  border: 1px solid $border;
  font-size: 16px;

  &-head {
    font-size: 18px;
  }

  &-block {
    &-head {
      padding: 10px 0;
    }

    &-body {
      padding: 10px;
    }
  }

  .line {
    border: 1px solid #f1f1f1;
    margin: 15px 0;
  }
}

</style>
