/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 10:54:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-04 01:37:16
 */

// import type { AttributifyAttributes } from '@unocss/preset-attributify'
import presetAttributify, {
    AttributifyAttributes,
  } from 'unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

declare module '@pink-ui/components/dist/Button'


// declare module '*.json' {
//   const value: any;
//   export default value;
// } 