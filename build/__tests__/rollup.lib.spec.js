import {getInput, getFile, getName} from "../rollup.lib"
import {name} from "../../package.json"

test("test lib", () => {
  expect(getInput()).toBe("packages/index.js")
  expect(getInput("button")).toBe("packages/button/index.js")

  expect(getFile("", "umd")).toBe("lib/index.umd.js")
  expect(getFile("button", "umd")).toBe("lib/button/index.umd.js")

  expect(getName("", "umd")).toBe(name)
  expect(getName("button", "umd")).toBe(`${name}_umd_button`)
})
