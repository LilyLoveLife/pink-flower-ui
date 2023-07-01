/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2023-05-28 10:54:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-02 00:14:19
 */

// import type { AttributifyAttributes } from '@unocss/preset-attributify'
import presetAttributify, {
  AttributifyAttributes,
} from "unocss/preset-attributify";

declare module "react" {
  type HTMLAttributes<T> = AttributifyAttributes;
}

declare module "pink-flower-ui";

// declare module '*.json' {
//   const value: any;
//   export default value;
// }
