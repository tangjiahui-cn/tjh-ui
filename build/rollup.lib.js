import alias from "./alias";
import {name} from '../package.json';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import {terser} from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import getPackagesInfo from "./utils/getPackagesInfo";
import aliasResolve from './plugins/rollup-plugin-alias';

const packagesInfo = [{name: ''}, ...getPackagesInfo()];

const getInput = packageName => packageName
    ? `packages/${packageName}/index.js`
    : 'packages/index.js'

const getName =  (packageName, format) => packageName
    ? name + `_${format}_${packageName}`
    : name

const getFile = (packageName, format) => packageName
    ? `lib/${packageName}/index.${format}.js`
    : `lib/index.${format}.js`

export default packagesInfo.map(({name: packageName}) => {
  return {
    input: getInput(packageName),
    output: ['umd', 'es'].map(format => ({
      format,
      name: getName(packageName, format),
      file: getFile(packageName, format)
    })),
    plugins: [
      resolve(),
      aliasResolve(alias),
      json(),
      vuePlugin(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      postcss({
        minimize: true,
        extract: 'index.css',
        extensions: ['.css', '.less', '.scss'],
      }),
      terser()
    ]
  }
})