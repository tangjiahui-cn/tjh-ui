// https://stylelint.docschina.org/user-guide/rules/
module.exports = {
  extends: [
    "stylelint-config-standard-scss", // 支持scss
    "stylelint-config-html/vue" // 单独支持vue
  ],
  rules: {
    "scss/at-import-partial-extension": null, // 导入扩展。（允许.scss）
    "color-hex-case": "lower", // 颜色字符串为小写
    "color-hex-length": "long" // 禁止16进制颜色字符串简写
  }
};
