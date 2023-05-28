import { build, defineConfig, UserConfigExport, UserConfig, InlineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { UserConfig } from "vitest"
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import fs from "fs-extra"
import path from "path"
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))

export const config: UserConfig = {
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
      entry: path.resolve(__dirname, "../src/esEntry.ts") ,// '../src/esEntry.ts',
      name: 'PinkUI',
      formats: ['es'],
      fileName: 'index'
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
    outDir: path.resolve(__dirname, "../dist/es")// '../dist/es',

  },
}
// https://vitejs.dev/config/
build(defineConfig(config) as InlineConfig)
