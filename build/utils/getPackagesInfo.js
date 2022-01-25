import * as fs from "fs";
import * as path from "path";
import alias from "../alias";

const exclude = [/^_/]; // 忽略文件、_开头的文件夹

/**
 * 获取packages目录下所有组件
 * @returns {*[{name: '', path: ''}]}
 */
export default function getPackagesInfo() {
  const packageInfos = [];
  const packagesDir = alias["packages"];
  const files = fs.readdirSync(packagesDir);

  files.forEach((file) => {
    const filePath = path.join(packagesDir, file);
    const isDirectoryAndNotExclude =
      fs.statSync(filePath).isDirectory() &&
      !exclude.find((x) => new RegExp(x).test(file));
    if (isDirectoryAndNotExclude) {
      packageInfos.push({
        name: file,
        path: filePath
      });
    }
  });

  return packageInfos;
}
