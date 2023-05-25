/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 20:44:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-26 01:28:54
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    }),
  ],
})
