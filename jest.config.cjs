// jest.config.cjs
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Random User API Test Report",
        outputPath: "./reports/test-report.html",
        includeFailureMsg: true,
      },
    ],
  ],
};

