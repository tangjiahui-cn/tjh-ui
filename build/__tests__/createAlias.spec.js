const rootResolve = require("../utils/rootResolve")
const createAlias = require("../utils/createAlias")

const nameMap = {
  "~": "packages/_styles",
  packages: "packages",
  props: "packages/_props"
}

const expectAlias = {
  "~": rootResolve("packages/_styles"),
  packages: rootResolve("packages"),
  props: rootResolve("packages/_props")
}

test("nameMap => alias", () => {
  const result = JSON.stringify(createAlias(nameMap))
  const expectResult = JSON.stringify(expectAlias)
  expect(result).toBe(expectResult)
})
