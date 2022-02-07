// import * as path from "path";
const path = require("path");

module.exports = function (importPath) {
  const rootPath = process.cwd().replace(/\\/g, "/");
  return path.resolve(rootPath, importPath);
}
// export default function (importPath) {
//   const rootPath = process.cwd().replace(/\\/g, "/");
//   return path.resolve(rootPath, importPath);
// }
