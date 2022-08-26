// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// const nextJest = require("next/jest");
// const createJestConfig = nextJest({
//   dir: "./",
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   moduleDirectories: ['node_modules', '<rootDir>/'],
//   testEnvironment: 'jsdom',
//   transform: {
//     /* Use babel-jest to transpile tests with the next/babel preset
//     https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
//   },
//   transformIgnorePatterns: [
//     '/node_modules/',
//     '^.+\\.module\\.(css|sass|scss)$',
//     'node_modules/(?!@firebase/auth)'
//   ],
//   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
// }

// module.exports = createJestConfig(customJestConfig)

// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
//   transform: {
//       "\\.[jt]sx?$": "babel-jest"
//   },
//   extensionsToTreatAsEsm: [".tsx"]
// };
// module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   collectCoverageFrom: [
//     "**/*.{js,jsx,ts,tsx}",
//     "!**/*.d.ts",
//     "!**/node_modules/**",
//   ],
//   moduleNameMapper: {
//     /* Handle CSS imports (with CSS modules)
//     https://jestjs.io/docs/webpack#mocking-css-modules */
//     "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

//     // Handle CSS imports (without CSS modules)
//     "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

//     /* Handle image imports
//     https://jestjs.io/docs/webpack#handling-static-assets */
//     "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
//       "<rootDir>/__mocks__/fileMock.js",
//   },
//   testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
//   testEnvironment: "jsdom",
//   transform: {
//     /* Use babel-jest to transpile tests with the next/babel preset
//     https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
//     "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
//   },
//   transformIgnorePatterns: [
//     "/node_modules/",
//     "^.+\\.module\\.(css|sass|scss)$",
//     "node_modules/(?!@firebase/auth)",
//     "node_modules/(?!react)",
//   ],
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// };

//import nextJest from "next/jest";
// const nextJest = require("next/jest");

// // Sync object
// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// // Add any custom config to be passed to Jest
// const customJestConfig = {
//   // Add more setup options before each test is run
//   testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],

//   //setupFilesAfterEnv: ["@testing-library/jest-dom"], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jsdom",
//   //modulePathIgnorePatterns: ['cypress'],
//   transform: {
//     //     /* Use babel-jest to transpile tests with the next/babel preset
//     //     https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
//     "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
//   },
//   transformIgnorePatterns: [
//     "/node_modules/",
//     "^.+\\.module\\.(css|sass|scss)$",
//     "node_modules/(?!@firebase/auth)",
//     "node_modules/(?!react)",
//   ],
// };

// module.exports = createJestConfig(customJestConfig);

module.exports = {
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  // coverageProvider: 'v8',
  // collectCoverageFrom: [
  //   '**/*.{js,jsx,ts,tsx}',
  //   '!**/*.d.ts',
  //   '!**/node_modules/**',
  //   '!<rootDir>/out/**',
  //   '!<rootDir>/.next/**',
  //   '!<rootDir>/*.config.js',
  //   '!<rootDir>/coverage/**',
  // ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  //setupFilesAfterEnv: [  "@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleFileExtensions: ['js','ts', 'tsx'],
  roots:['./'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    //'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
