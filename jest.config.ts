module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
      "src/**/*.tsx",
      "!src/**/*.spec.tsx",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!src/index.tsx"
  ],
  coverageReporters: ['clover', 'json', 'lcov'],
};
