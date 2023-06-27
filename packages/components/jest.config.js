/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-06-27 20:54:31
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-06-27 21:26:41
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-ui/packages/components/jest.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        babelConfig: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.{ts,tsx,js,jsx,mjs}',
        '**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}',
    //   '<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx,mjs}',
    //   '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}',
    ],
    reporters: [
      'default',
      [
        './node_modules/jest-html-reporter',
        {
          pageTitle: '测试报告',
        },
      ],
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['app/react/**/*.{ts,tsx}', '!app/react/__tests__/api/api-test-helpers.ts'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "identity-obj-proxy"
      }
  };
  