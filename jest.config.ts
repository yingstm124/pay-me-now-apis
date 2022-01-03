import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.json",
  //   },
  // },
  // moduleFileExtensions: ["ts", "js"],
  // testMatch: ["**/test/**/*.test.(ts|js)"],
  // testEnvironment: "node",
};
export default config;
