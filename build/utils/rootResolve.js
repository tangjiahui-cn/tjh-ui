import * as path from "path";

export default function (importPath) {
  const rootPath = process.cwd().replace(/\\/g, "/");
  return path.resolve(rootPath, importPath);
}
