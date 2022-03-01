<template>
  <div class="body">
    <div class="body-left">
      <div class="body-left-head">组件列表</div>
      <div
        v-for="(item, key) in menuData"
        :key="key"
        :class="['item', current === item.path ? 'item-choose' : '']"
        @click="clickMenu(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="body-right">
      <router-view />
    </div>
  </div>
</template>
<script>
import {ref} from "vue"
import {useRouter} from "vue-router"
import examples from "./router/examples"

export default {
  setup () {
    const router = useRouter()
    const menuData = examples.filter(
      (x) => x.name && (x.visible !== undefined ? x.visible : true)
    )
    const current = ref(0)

    if (menuData.length) {
      current.value = menuData[0].path
      router.push(menuData[0].path)
    }

    function clickMenu (item) {
      current.value = item.path
      router.push(item.path)
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
@import "~/common/var/index.scss";
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
      cursor: default;
      user-select: none;
      margin-bottom: 10px;
      background: whitesmoke;
    }
  }

  &-right {
    flex: 1;
    overflow-y: auto;
  }
}

.item {
  padding: 10px;
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

.components {
  & + & {
    margin-left: 10px;
  }
}
</style>
