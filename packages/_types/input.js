export const props = {
  size: {
    type: String,
    default: "default" // 可选 default 、 small 、large
  },
  value: {
    type: [String, undefined],
    default: undefined
  },
  defaultValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  allowClear: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export const emits = ["change"]
