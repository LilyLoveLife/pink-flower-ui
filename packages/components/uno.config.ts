/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-26 01:34:44
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-26 14:16:19
 */
import {
    defineConfig, presetAttributify, presetIcons,
    presetTypography, presetUno, transformerAttributifyJsx
  } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  theme: {
},
shortcuts: {
 // 这里可以放全局公共样式
  'h-btn': 'h-48px w-100% bg-#5C33BE b-none text-white rounded-8px'
},
safelist: [],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})