const path = require("path")

module.exports = function (importPath) {
  return path.resolve(process.cwd(), importPath).replace(/\\/g, "/")
}
