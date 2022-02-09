const createAlias = require("./utils/createAlias")
const createJestAlias = require("./utils/createJestAlias")

// 别名映射
// 别名 -> 根路径下文件地址
const nameMap = {
  "~": "packages/_styles",
  packages: "packages",
  props: "packages/_props"
}

module.exports = createAlias(nameMap)
module.exports.jestAlias = createJestAlias(nameMap)
