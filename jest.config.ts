/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};

export default config;
