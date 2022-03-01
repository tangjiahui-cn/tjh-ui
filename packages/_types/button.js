export const props = {
  type: {
    type: String,
    default: "default" // 可选 default、primary、dashed、text
  },
  value: {
    type: String,
    default: "按 钮"
  },
  size: {
    type: String,
    default: "default" // 可选 default 、 small 、large
  },
  disabled: {
    type: Boolean,
    default: false
  },
  danger: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
}

export const emits = []
