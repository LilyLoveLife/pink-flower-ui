/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 10:54:35
 * @LastEditors: 
 * @LastEditTime: 2023-05-29 01:20:51
 */

// import type { AttributifyAttributes } from '@unocss/preset-attributify'
import presetAttributify, {
    AttributifyAttributes,
  } from 'unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

declare module '@pink-ui/components/dist/Button'