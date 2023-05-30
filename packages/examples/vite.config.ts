/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-07 17:20:52
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-30 11:17:08
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer()
  ],
})
