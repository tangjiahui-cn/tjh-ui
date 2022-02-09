const {jestAlias} = require("./build/alias")

module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  moduleNameMapper: jestAlias,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.spec.js"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80
    }
  },
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  }
}
