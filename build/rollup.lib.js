import {name} from "../package.json"
import {DEFAULT_EXTENSIONS} from "@babel/core"
import json from "@rollup/plugin-json"
import babel from "@rollup/plugin-babel"
import vuePlugin from "@vitejs/plugin-vue"
// import vuePlugin from "rollup-plugin-vue"
import postcss from "rollup-plugin-postcss"
import {terser} from "rollup-plugin-terser"
import resolve from "@rollup/plugin-node-resolve"
import aliasResolve from "./plugins/rollup-plugin-alias"
// import fixTsxJest from "./plugins/rollup-plugins-vue3-fix-tsx-jest"
// import typescript from "rollup-plugin-typescript2"
const alias = require("./alias")
const getPackagesInfo = require("./utils/getPackagesInfo")

const packagesInfo = [...getPackagesInfo(), {name: ""}]

export const getInput = (packageName) =>
  packageName ? `packages/${packageName}/index.js` : "packages/index.js"

export const getName = (packageName, format) =>
  packageName ? `${name}_${format}_${packageName}` : name

export const getFile = (packageName, format) =>
  packageName
    ? `lib/${packageName}/index.${format}.js`
    : `lib/index.${format}.js`

export default packagesInfo.map(({name: packageName}) => {
  return {
    input: getInput(packageName),
    output: ["umd", "es"].map((format) => ({
      format,
      name: getName(packageName, format),
      file: getFile(packageName, format),
      globals: {
        vue: "vue"
      }
    })),
    plugins: [
      // typescript({
      //   module: "ESNext"
      // }),
      resolve(),
      aliasResolve(alias),
      // fixTsxJest(),
      json(),
      vuePlugin(),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, "ts", "tsx"],
        babelHelpers: "bundled",
        exclude: "node_modules/**"
      }),
      postcss({
        minimize: true,
        extract: "index.css",
        extensions: [".css", ".less", ".scss"]
      }),
      terser()
    ],
    external: ["vue"]
  }
})
