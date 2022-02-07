const createJestAlias = require("../utils/createJestAlias");

const nameMap = {
  "~": "packages/_styles",
  "packages": "packages",
  "props": "packages/_props"
}

const expectAlias = {
  "^~/(.*)$": "<rootDir>/packages/_styles/$1",
  "^packages/(.*)$": "<rootDir>/packages/$1",
  "^props/(.*)$": "<rootDir>/packages/_props/$1"
}

test("nameMap => alias", () => {
  const result = JSON.stringify(createJestAlias(nameMap))
  const expectResult = JSON.stringify(expectAlias)
  expect(result).toBe(expectResult);
})
