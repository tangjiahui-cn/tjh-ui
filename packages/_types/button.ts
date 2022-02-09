export const buttonType = [
  "default",
  "primary",
  "dashed"
] as const

export const buttonProps = {
  type: {
    type: String,
    default: "default",
    values: buttonType
  },
  value: {
    type: String,
    default: "按 钮"
  }
} as const
