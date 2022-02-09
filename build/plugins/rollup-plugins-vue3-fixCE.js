import rollupConfig from "../rollup.lib"
let checked = false
/*
 * 解决"isCE"的bug
 *
 * 注意：需要在打包配置中启用: external:["vue"]
 */
export default function fixCE() {
  return {
    name: "alias",
    transform(code, path) {
      let _code = code
      if (path.endsWith("tsx")) {
        check()
        _code = addH(_code)
        _code = setupToArray(_code)
      }
      return _code
    }
  }
}

// 校验 是否启用了 external:["vue"]。如果无，则报错。
function check() {
  if (!checked) {
    if (Array.isArray(rollupConfig)) {
      for (let i = 0; i < rollupConfig.length; i++) {
        const {external = []} = rollupConfig[i]
        if (!external.includes("vue")) {
          throw new Error('no \'vue\' in external.  like: "external: ["vue"]"')
        }
      }
    } else {
      const {external = []} = rollupConfig
      if (!external.includes("vue")) {
        throw new Error('no \'vue\' in external.  like: "external: ["vue"]"')
      }
    }
    checked = true
  }
}

// 开头增加 const h = createVNode;
function addH(code) {
  let _code = code
  const isCreateVNode = /import {(.*)createVNode(.*)} from ['"]vue['"]/.test(
    code
  )
  const importReg = /(import {(.*)} from ['"]vue['"](;?))/
  if (!isCreateVNode) {
    _code = _code.replace(importReg, 'import { createVNode,$2} from "vue"$3')
  }
  return _code.replace(importReg, "$1\nconst h = createVNode;")
}

// 将setup函数转为箭头函数
function setupToArray(code) {
  let _code = code
  const hReg = /const h = createVNode;/
  const objectFunctionReg = /setup[.!:]*\((.*)\).*{/
  const functionReg = /setup.*:.*function.*\((.*)\).*{/

  if (hReg.test(_code)) {
    if (functionReg.test(_code)) {
      _code = _code.replace(functionReg, "setup: ($1) => {")
    }
    if (objectFunctionReg.test(_code)) {
      _code = _code.replace(objectFunctionReg, "setup: ($1) => {")
    }
  }
  return _code
}
