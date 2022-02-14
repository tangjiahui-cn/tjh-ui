<template>
  <div class="body">
    <div class="body-left">
      <div class="body-left-head">组件列表</div>
      <div
        v-for="(item, key) in menuData"
        :key="key"
        :class="[
          'item',
          current === item.id ? 'item-choose' : ''
        ]"
        @click="clickMenu(item)"
      >{{item.name}}</div>
    </div>
    <div class="body-right">
      <Inputs v-if="current == 2"/>
      <Buttons v-if="current == 1"/>
    </div>
  </div>
</template>
<script>
import {ref} from "vue"
import Buttons from "./examples/button/index.vue"
import Inputs from "./examples/input/index.vue"

export default {
  components: {Buttons, Inputs},
  setup() {
    const menuData = [
      {id: 1, name: "Button"},
      {id: 2, name: "Input"}
    ]

    const current = ref(1)

    function clickMenu(item) {
      current.value = item.id
    }

    return {
      menuData,
      current,
      clickMenu
    }
  }
}

</script>
<style scoped lang="scss">
@import "~/common/index.scss";
.body {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;

  &-left {
    flex: 0 0 180px;
    border-right: 1px solid $border;

    &-head {
      color: $borderDeep;
      padding: 20px 40px;
      background: whitesmoke;
      cursor: default;
      user-select: none;
      margin-bottom: 10px;
    }
  }

  &-right {
    flex: 1;
    overflow-y: auto;
  }
}

.item {
  padding: 5px 10px;
  cursor: pointer;
  color: $colorHover;
  box-sizing: border-box;
  transition: background $delay;

  &:hover {
    color: $primaryHover;
  }

  &-choose {
    color: $primary;
    background: #f6f6f6;
  }
}
</style>
