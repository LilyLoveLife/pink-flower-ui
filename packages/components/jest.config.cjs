module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      babelConfig: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  },
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.{ts,tsx,js,jsx,mjs}",
    "**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}",
    //   '<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx,mjs}',
    //   '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}',
  ],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "测试报告",
      },
    ],
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "app/react/**/*.{ts,tsx}",
    "!app/react/__tests__/api/api-test-helpers.ts",
  ],
  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
