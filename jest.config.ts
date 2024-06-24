// import nextJest from "next/jest";
// import type { Config } from "jest";
// import { pathsToModuleNameMapper } from "ts-jest";

// const createJestConfig = nextJest({ dir: "./" });

// process.env.TZ = "Asia/Seoul";

// const jestConfig: Config = {
//   preset: "ts-jest",
//   testEnvironment: "jest-environment-jsdom",
//   setupFiles: ["jest-plugin-context/setup"],
//   setupFilesAfterEnv: ["./jest.setup.ts"],
//   coveragePathIgnorePatterns: ["/node_modules/", "./src/mocks/", "tracking/*", "constants/*", "./src/common/apis/*", "./src/states/*"],
//   testPathIgnorePatterns: ["testUtils/*"],
//   collectCoverageFrom: ["src/**/*.ts", "!**/index.ts"],
//   coverageReporters: ["lcov"],
//   coverageDirectory: "./coverage/",
//   moduleNameMapper: pathsToModuleNameMapper(
//     {
//       "@common/*": ["src/common/*"],
//       "@modules/*": ["src/modules/*"],
//       "@styles/*": ["src/styles/*"],
//     },
//     {
//       prefix: "<rootDir>/",
//     }
//   ),
//   transformIgnorePatterns: ["/node_modules/(?!@braze)"],
//   coverageThreshold: {
//     global: {
//       branches: 75,
//       functions: 75,
//       lines: 75,
//       statements: 75,
//     },
//   },
// };

// module.exports = createJestConfig(jestConfig);
