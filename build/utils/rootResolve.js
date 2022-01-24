import * as path from "path";

export default function (importPath) {
  return path.resolve(process.cwd(), importPath);
}
