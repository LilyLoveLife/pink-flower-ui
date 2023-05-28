/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-07 17:20:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-29 00:39:13
 */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'allowImportingTsExtensions': 'off'
  },
}
