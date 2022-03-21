export const props = {
  label: {
    type: String,
    default: ""
  },
  value: {
    type: [Boolean, undefined],
    default: undefined
  },
  defaultValue: {
    type: [Boolean, undefined],
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Boolean, undefined],
    default: undefined
  }
}

export const emits = ["change", "update:modelValue"]
