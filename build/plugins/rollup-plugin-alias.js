/*
 * 别名解析
 *
 * tips: 解决@rollup/plugin-alias解析css中别名失败的问题
 */
export default function alias(alias) {
  return {
    name: "alias",
    transform(code) {
      const lineReg = /import(.*)(('.*')|(".*"))/g
      const pathReg = /('(.*)'|"(.*)")/
      const lineArray = code.match(lineReg)

      if (lineArray) {
        lineArray.forEach((line) => {
          pathReg.test(line)
          const importPath = RegExp.$2 || RegExp.$3
          if (importPath) {
            Object.keys(alias).forEach((key) => {
              if (importPath.startsWith(key)) {
                const newPath = importPath.replace(key, alias[key])
                const newLine = line.replace(importPath, newPath)
                code = code.replace(line, newLine)
              }
            })
          }
        })
      }
      return code
    }
  }
}
