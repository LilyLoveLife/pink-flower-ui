/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-08 11:29:24
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-26 10:20:57
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-ui/packages/components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    // UnoCSS({
    //   presets: [presetUno(), presetAttributify(), presetIcons()]  // ?
    // }),
  ],
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  build: {
    target: 'es6',
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'PinkUI',
      formats: ['es', 'umd', 'iife', 'cjs'],
      fileName: 'pink-ui'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        extend: true,
        assetFileNames: () => 'style.css'
      }
    },
    // optimizeDeps: {
    //   exclude: ['fevent']
    // },
    outDir: './dist',

  },
})
