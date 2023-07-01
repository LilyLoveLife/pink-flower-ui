/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-06-25 23:52:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-01 17:31:33
 */
const { types } = require('./.cz-config.cjs')
const typeList = types.map(item => item.value)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeList]
  }
}