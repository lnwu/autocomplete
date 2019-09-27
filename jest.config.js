module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).ts?(x)"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"]
}
