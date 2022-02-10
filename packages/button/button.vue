<template>
  <button
    :class="[
      `t-button`,
      `t-button-size-${size}`,
      `t-button-type-${type}${danger ? '-danger' : ''}` +
        `${disabled ? '-disabled' : ''}`,
      block ? `t-button-block` : ``,
      loading ? `t-button-loading` : ''
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = focus || false"
    @focusin="focus = true;hover = true"
    @focusout="focus = false;hover = false"
  >
    <span
      v-if="loading"
      :class="[
        `loading-circle${type === 'primary' ? '-primary' : ''}` +
          `${danger ? '-danger' : ''}` +
          `${hover ? '-hover' : ''}`
      ]"
    />
    <span>
      <slot>{{ value }}</slot>
    </span>
  </button>
</template>

<script>
import {defineComponent, ref} from "vue"
import {props, emits} from "../_types/button"

export default defineComponent({
  name: "TButton",
  props,
  emits,
  setup() {
    const hover = ref(false)
    const focus = ref(false)
    return {
      hover,
      focus
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/button.scss";

@mixin circle ($color) {
  border: 1px solid transparent;
  border-top-color: $color;
  animation: 1s loadingCircle infinite linear;
}

@mixin colorCircle ($_color) {
  @extend .loading-circle;
  @include circle($_color);
}

.loading {
  &-circle {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border-radius: 100%;
    display: inline-block;
    background: transparent;
    @include circle($colorHover);

    &-hover {
      @include colorCircle($primaryHover);
    }

    &-primary {
      @include colorCircle(white);
      &-hover {
        @include colorCircle(white);
      }

      &-danger {
        @include colorCircle(white);
        &-hover {
          @include colorCircle(white);
        }
      }
    }

    &-danger {
      @include colorCircle($danger);
      &-hover {
        @include colorCircle($dangerHover);
      }
    }
  }
}

@keyframes loadingCircle {
  to {
    transform: rotate(360deg);
  }
}
</style>
