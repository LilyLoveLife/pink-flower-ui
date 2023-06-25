/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-06-25 23:52:45
 * @LastEditors: 
 * @LastEditTime: 2023-06-25 23:52:55
 */
const { types } = require('./.cz-config.js')
const typeList = types.map(item => item.value)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeList]
  }
}