<template>
  <button
    :disabled="disabled"
    :class="[
      't-button',
      `t-button-size-${size}`,
      `t-button-type-${type}${danger ? '-danger' : ''}`,
      block ? 't-button-block' : '',
      loading ? 't-button-loading' : ''
    ]"
    @focusin="focus = true;"
    @focusout="focus = false;"
  >
    <span
      v-if="loading"
      :class="[
        'loading-circle',
        `loading-circle-size-${size}`,
        `loading-circle-type-${type}${danger ? '-danger' : ''}${focus ? '-focus' : ''}`
      ]"
    />
    <span>
      <slot>
        {{ value }}
      </slot>
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
    const focus = ref(false)
    return {
      focus
    }
  }
})
</script>

<style lang="scss">
@import "../_styles/button.scss";

.loading-circle {
  margin-top: -3px;
  border-radius: 100%;
  display: inline-block;
  background: transparent;
  border: 1px solid transparent;
  animation: 1s rotateLoop infinite linear;
  box-sizing: border-box;

  &-size {
    &-large {
      width: 16px;
      height: 16px;
      margin-right: 15px;
    }

    &-default {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }

    &-small {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
  }

  &-type {
    @mixin default {
      border-top-color: $color;

      &-focus {
        border-top-color: $primary;
      }

      &-danger,
      &-danger-focus {
        border-top-color: $danger;
      }
    }

    &-primary,
    &-primary-focus,
    &-primary-danger,
    &-primary-danger-focus {
      border-top-color: white;
    }

    &-default { @include default; }

    &-dashed { @include default; }

    &-text {
      border-top-color: $color;
      &-focus {
        border-top-color: $color;
      }

      &-danger {
        border-top-color: $danger;
        &-focus {
          border-top-color: $danger;
        }
      }
    }
  }
}
</style>
