export const props = {
  checked: {
    type: [Boolean, undefined],
    default: undefined
  },
  defaultChecked: {
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
  }
}

export const emits = ["change"]
