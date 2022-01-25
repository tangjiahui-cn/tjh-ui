// https://eslint.bootcss.com/docs/rules/
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "vue/no-multiple-template-root": 0, // vue中根元素允许不止一个
    "no-debugger": ["error"], // 不允许debugger
    indent: ["error", 2], // 缩进2空格
    quotes: ["error", "double"], // 强制双引号
    semi: ["error", "always"], // 强制语句末尾加分号
    "semi-style": ["error", "last"], // 强制分号在末尾
    "space-infix-ops": ["error", {int32Hint: false}], // 强制操作符周围有空格true: a|0。false，a | 0
    "space-in-parens": ["error", "never"], // 强制圆括号内没有空格
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ], // 函数名后必须接空格
    "no-multiple-empty-lines": ["error", {max: 1}], // 最多一行空格
    "no-array-constructor": "error", // 禁止使用Array创建数组
    "newline-per-chained-call": ["error", {ignoreChainWithDepth: 2}], // 方法链每行只能调用1次
    "new-cap": "error", // 构造函数名首字母大写
    // "operator-linebreak": ["error", "before"],         // 运算符始终在前
    // "multiline-ternary": ["error", "always"],          // 三元运算符必须换行
    // "max-len": ["error", { "code": 80 }],              // 每行最多80字符
    "lines-between-class-members": ["error", "always"], // 强制类成员之间空行
    "keyword-spacing": ["error", {after: true, before: true}], // 强制关键字前后有空格
    "key-spacing": [
      "error",
      {beforeColon: false, afterColon: true, mode: "strict"}
    ], // 对象key的冒号后有空格
    "eol-last": ["error", "always"], // 文件末尾必须存在空格
    "computed-property-spacing": ["error", "never"], // 禁止在计算属性中添加空格
    "comma-spacing": ["error", {before: false, after: true}], // 强制在逗号后加空格
    "comma-dangle": ["error", "never"], // 强制禁止末尾出现逗号
    "func-call-spacing": ["error", "never"], // 强制函数调用处与括号间无空格
    "brace-style": "error", // 强制大括号在一行末尾，不独自成行
    "block-spacing": "error", // 强制开括号后、闭括号前必须有空格
    "array-bracket-spacing": ["error", "never"], // 强制禁止数组内出现空格
    "arrow-spacing": "error", // 箭头函数前后出现一致的空格
    "no-duplicate-imports": "error", // 禁止重复模块导入
    "no-var": "error", // 禁止使用var
    "no-extra-semi": "error", // 禁止多余的分号
    "no-extra-boolean-cast": "error", // 禁止不必要的布尔转换
    "no-console": "error" // 禁用console
  }
};
