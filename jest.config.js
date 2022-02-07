module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
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
  }
};
